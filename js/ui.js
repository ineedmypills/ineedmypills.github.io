import { state, BIRTH_DATE, selectors } from './state.js';
import { translations } from './translations.js';

export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);

export const applyLanguage = (lang) => {
    const translatableElements = getElements(selectors.translatableElement);
    state.lang = lang;
    document.documentElement.lang = lang;
    document.title = translations[lang]['page-title'] ?? 'ineedmypills - Portfolio';

    translatableElements.forEach(el => {
        const key = el.dataset.key;
        if (key && translations[lang]?.[key]) {
            if (el.dataset.allowHtml === 'true') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    getElement(selectors.shareButton)?.setAttribute('aria-label', translations[lang]['share-button-aria']);
    getElement(selectors.themeToggle)?.setAttribute('aria-label', translations[lang]['theme-toggle-aria']);
    getElement(selectors.langToggle)?.setAttribute('aria-label', translations[lang]['lang-toggle-aria']);
    getElement(selectors.shareModalCloseButton)?.setAttribute('aria-label', translations[lang]['share-modal-close-aria']);
    displayAge();

    try {
        localStorage.setItem('lang', lang);
    } catch (e) {
        console.warn('LocalStorage is not available.');
    }
};

export const initLanguage = () => {
    const langToggle = getElement(selectors.langToggle);
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = state.lang === 'ru' ? 'en' : 'ru';
            applyLanguage(newLang);
        });
    }

    try {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            applyLanguage(savedLang);
            return;
        }
    } catch (e) {
        console.warn('LocalStorage is not available.');
    }

    const browserLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    applyLanguage(browserLang === 'ru' ? 'ru' : 'en');
};

export const applyTheme = (theme) => {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        console.warn('LocalStorage is not available.');
    }
};

export const initTheme = () => {
    const themeToggle = getElement(selectors.themeToggle);
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        applyTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));
    } catch (e) {
        console.warn('LocalStorage is not available, using default theme.');
        applyTheme('light');
    }

    window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', e => {
        try {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        } catch (e) {}
    });
};

export const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};

export const displayAge = () => {
    const agePlaceholder = getElement(selectors.agePlaceholder);
    if (!agePlaceholder) return;
    const age = calculateAge(BIRTH_DATE);
    const prefix = translations[state.lang]['age-prefix'] || 'Age: ';
    const suffix = translations[state.lang]['age-suffix'] || ' years';
    agePlaceholder.textContent = `${prefix}${age}${suffix}`;
};

export const initClickDelegation = () => {
    let lastCopied = { element: null, timeoutId: null };

    document.body.addEventListener('click', e => {
        const cryptoButton = e.target.closest(selectors.cryptoButton);
        if (cryptoButton) {
            const address = cryptoButton.dataset.address;
            const textEl = cryptoButton.querySelector('.crypto-commission');
            if (!address || !textEl || lastCopied.element === cryptoButton) return;

            if (lastCopied.element) {
                clearTimeout(lastCopied.timeoutId);
                const prevTextEl = lastCopied.element.querySelector('.crypto-commission');
                if (prevTextEl) {
                    prevTextEl.textContent = translations[state.lang]['copy-to-clipboard'];
                    lastCopied.element.classList.remove('is-copied');
                }
            }

            navigator.clipboard.writeText(address).then(() => {
                textEl.textContent = translations[state.lang]['copied-feedback'];
                cryptoButton.classList.add('is-copied');

                lastCopied.element = cryptoButton;
                lastCopied.timeoutId = setTimeout(() => {
                    textEl.textContent = translations[state.lang]['copy-to-clipboard'];
                    cryptoButton.classList.remove('is-copied');
                    lastCopied = { element: null, timeoutId: null };
                }, 2000);
            }).catch(err => console.error('Failed to copy address: ', err));
        }
    });
};

export const setupInterestLink = (buttonId, sectionId) => {
    const button = getElement(buttonId);
    const section = getElement(`#${sectionId}`);
    if (!button || !section) return;

    const highlight = () => {
        section.querySelectorAll('.project-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('pulse-highlight');
                card.addEventListener('animationend', () => card.classList.remove('pulse-highlight'), { once: true });
            }, index * 150);
        });
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                highlight();
                observer.unobserve(section);
            }
        });
    }, { threshold: 0.5 });

    button.addEventListener('click', () => {
        scrollObserver.observe(section);
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
};
