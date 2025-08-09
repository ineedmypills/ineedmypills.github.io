import { state, selectors } from './state.js';
import { translations } from './translations.js';
import { getElement, getElements } from './ui.js';

export const initShareModal = () => {
    const shareButton = getElement(selectors.shareButton);
    const shareModal = getElement(selectors.shareModal);
    if (!shareModal || !shareButton) return;

    const closeButton = getElement(selectors.shareModalClose);
    const options = getElement(selectors.shareOptions);
    const checkboxes = options.querySelectorAll('input[type="checkbox"]');
    const linkInput = getElement(selectors.shareLinkInput);
    const copyButton = getElement(selectors.copyLinkButton);
    const headerCheckbox = options.querySelector('input[value="header"]');
    const headerSubgroup = getElement(selectors.headerOptionsSubgroup);

    const allCheckboxValues = new Set(Array.from(checkboxes).map(cb => cb.value));
    const defaultValues = new Set(allCheckboxValues);
    defaultValues.delete('alt_header');

    const generateShareLink = () => {
        const selected = new Set(Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value));
        const allSections = new Set(['skills', 'projects', 'education', 'about', 'contacts', 'support']);
        const hasContent = [...selected].some(item => allSections.has(item));
        const isInvalid = selected.size > 0 && !hasContent && selected.has('header');
        const shouldDisable = selected.size === 0 || isInvalid;

        copyButton.disabled = shouldDisable;
        copyButton.parentElement.style.opacity = shouldDisable ? '0.5' : '1';
        copyButton.parentElement.style.pointerEvents = shouldDisable ? 'none' : 'auto';

        if (shouldDisable) {
            linkInput.value = '';
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

    const openModal = () => {
        generateShareLink();
        shareModal.classList.remove('hidden');
    };
    const closeModal = () => shareModal.classList.add('hidden');

    shareButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    shareModal.addEventListener('click', e => e.target === shareModal && closeModal());
    checkboxes.forEach(cb => cb.addEventListener('change', generateShareLink));
    headerCheckbox.addEventListener('change', () => {
        updateHeaderDependencies();
        generateShareLink();
    });

    copyButton.addEventListener('click', () => {
        if (!navigator.clipboard || copyButton.disabled) return;
        navigator.clipboard.writeText(linkInput.value).then(() => {
            const originalText = translations[state.lang]['share-copy'];
            copyButton.textContent = translations[state.lang]['share-copied'];
            copyButton.disabled = true;
            setTimeout(() => {
                copyButton.textContent = originalText;
                generateShareLink();
            }, 2000);
        });
    });

    updateHeaderDependencies();
};

export const handleSharedLinkView = () => {
    const params = new URLSearchParams(window.location.search);
    const showParam = params.get('show');
    if (!showParam) return;

    const visibleItems = new Set(showParam.split(','));
    getElement(selectors.shareButton)?.remove();

    if (visibleItems.has('header')) {
        if (visibleItems.has('alt_header')) {
            getElement('#main-header-title').textContent = translations[state.lang]['alt-header-title'];
        }
        if (!visibleItems.has('full_name')) {
            getElement('#main-header-name')?.remove();
        }
        if (!visibleItems.has('subtitle')) {
            getElement('#header-subtitle')?.remove();
        }
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
