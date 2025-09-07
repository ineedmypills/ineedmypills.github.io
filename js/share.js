import { state, selectors } from './state.js';
import { translations } from './translations.js';
import { getElement, getElements } from './ui.js';

export const initShareModal = () => {
    const shareButton = getElement(selectors.shareButton);
    const shareModal = getElement(selectors.shareModal);
    if (!shareModal || !shareButton) return;

    const closeButton = getElement(selectors.shareModalClose);
    const options = getElement(selectors.shareOptions);
    const checkboxes = Array.from(options.querySelectorAll('input[type="checkbox"]'));
    const linkInput = getElement(selectors.shareLinkInput);
    const copyButton = getElement(selectors.copyLinkButton);
    const headerCheckbox = options.querySelector('input[value="header"]');
    const headerSubgroup = getElement(selectors.headerOptionsSubgroup);

    const defaultValues = new Set(checkboxes.map(cb => cb.value).filter(val => val !== 'alt_header'));

    const generateShareLink = () => {
        const selected = new Set(checkboxes.filter(cb => cb.checked).map(cb => cb.value));
        const hasContent = [...selected].some(item => !['header', 'full_name', 'subtitle', 'alt_header'].includes(item));
        const isInvalid = selected.size > 0 && !hasContent && selected.has('header');
        const shouldDisable = selected.size === 0 || isInvalid;

        copyButton.disabled = shouldDisable;
        copyButton.parentElement.style.opacity = shouldDisable ? '0.5' : '1';
        copyButton.parentElement.style.pointerEvents = shouldDisable ? 'none' : 'auto';

        if (shouldDisable) {
            linkInput.value = translations[state.lang]['share-invalid-selection'] || 'Select at least one content section.';
            return;
        }

        const isDefault = selected.size === defaultValues.size && [...selected].every(v => defaultValues.has(v));
        const baseUrl = `${window.location.origin}${window.location.pathname}`;
        linkInput.value = isDefault ? baseUrl : `${baseUrl}?show=${[...selected].join(',')}`;
    };

    const updateHeaderDependencies = () => {
        const isHeaderChecked = headerCheckbox.checked;
        headerSubgroup.style.opacity = isHeaderChecked ? '1' : '0.5';
        headerSubgroup.querySelectorAll('input').forEach(cb => {
            cb.disabled = !isHeaderChecked;
            cb.parentElement.style.cursor = isHeaderChecked ? 'pointer' : 'not-allowed';
            if (!isHeaderChecked) cb.checked = false;
        });
    };

    const toggleModal = (show) => {
        shareModal.classList.toggle('hidden', !show);
    };

    shareButton.addEventListener('click', () => toggleModal(true));
    closeButton.addEventListener('click', () => toggleModal(false));
    shareModal.addEventListener('click', e => e.target === shareModal && toggleModal(false));

    checkboxes.forEach(cb => cb.addEventListener('change', generateShareLink));
    headerCheckbox.addEventListener('change', updateHeaderDependencies);

    copyButton.addEventListener('click', () => {
        if (!navigator.clipboard || copyButton.disabled) return;
        navigator.clipboard.writeText(linkInput.value).then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = translations[state.lang]['share-copied'];
            copyButton.disabled = true;
            setTimeout(() => {
                copyButton.textContent = originalText;
                generateShareLink();
            }, 2000);
        });
    });

    updateHeaderDependencies();
    generateShareLink(); // Initial generation
};

export const ALL_SECTIONS = ['skills', 'projects', 'education', 'about', 'contacts', 'support'];

export const getVisibleSections = () => {
    const params = new URLSearchParams(window.location.search);
    const showParam = params.get('show');
    if (showParam) {
        return new Set(showParam.split(','));
    }
    return new Set(ALL_SECTIONS.concat(['header', 'full_name', 'subtitle']));
};

export const handleSharedLinkView = () => {
    const visibleItems = getVisibleSections();
    const isCustomView = new URLSearchParams(window.location.search).has('show');

    if (!isCustomView) return;

    getElement(selectors.shareButton)?.remove();

    if (visibleItems.has('header')) {
        if (visibleItems.has('alt_header')) {
            const titleEl = getElement('#main-header-title');
            if(titleEl) titleEl.dataset.key = 'alt-header-title';
        }
        if (!visibleItems.has('full_name')) getElement('#main-header-name')?.remove();
        if (!visibleItems.has('subtitle')) getElement('#header-subtitle')?.remove();
    } else {
        getElement('header')?.remove();
    }

    getElements(selectors.contentSection).forEach(section => {
        const sectionId = section.id.replace('-section', '');
        if (!visibleItems.has(sectionId)) {
            section.remove();
        }
    });
};
