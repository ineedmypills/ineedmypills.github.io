
(() => {
    const translations = {
        ru: {
            "page-title": "ineedmypills",
            "main-title": "ineedmypills",
            "alt-header-title": "Коктейльчик",
            "full-name": "Глухих Егор Алексеевич",
            "specialist": "Начинающий многосторонне развитый IT-\"специалист\"",
            "skills-title": "Технические навыки",
            "lang-title": "Языки программирования",
            "software-title": "Программное обеспечение",
            "ai-skill": "Владение ИИ",
            "projects-title": "Ключевые проекты",
            "games-category-title": "Игры",
            "software-category-title": "Программное обеспечение",
            "fh3-desc": "Неофициальное переиздание игры Final Hours 3",
            "npc-desc": "\"Почувствуйте, каково это - быть неигровым персонажем.\"",
            "npc-jam": "Игра для",
            "judges-5th": "5 место (судьи)",
            "players-28th": "28 место (игроки)",
            "kolobok-desc": "Увлекательный 3D шутер-платформер, вдохновлённый игрой \"My Friend Pedro\", с видом сбоку в стилистике \"Киберпанка\"",
            "obs-desc": "Компактный экранный индикатор для записи и буфера повтора в OBS Studio",
            "completed": "Завершенный проект",
            "in-progress": "В разработке",
            "course-completed": "Окончил",
            "course-in-progress": "В процессе",
            "education-title": "Образование",
            "secondary-edu": "Среднее общее образование",
            "11-classes": "11 классов",
            "computer-academy": "Компьютерная Академия \"ТОП\"",
            "specialization": "Специализация: разработка программного обеспечения",
            "first-year": "1 курс",
            "second-year": "2 курс",
            "third-year": "3 курс",
            "first-place": "1 место в группе",
            "project-defense": "Защитил проект по Unreal Engine",
            "contacts-title": "Контакты",
            "about-title": "О себе",
            "about-text": "Увлеченный геймдевелопер с разносторонним техническим бэкграундом. Страстно увлечен созданием игр - от концепции до релиза. Участвую в Game Jams для оттачивания навыков работы в сжатые сроки. Экспериментирую с интеграцией ИИ в творческие процессы. Обладаю упорством в доведении проектов до завершения и креативным подходом к решению технических задач. Постоянно осваиваю новые технологии и инструменты разработки.",
            "interest-gamedev": "Разработка инди-игр",
            "interest-software": "Разработка ПО",
            "interest-ai": "Генеративное искусство и нейросети",
            "interest-music": "Создание электронной музыки",
            "interest-youtuber": "Ютубер",
            "support-title": "Поддержать",
            "t-bank": "Т-Банк",
            "no-commission": "Без комиссии",
            "commission-3.5": "Комиссия 3,5%",
            "commission-10": "Комиссия 10%",
            "recommended": "Рекомендуется",
            "not-recommended-rf": "не рекомендуется для РФ",
            "backup-option": "Запасной вариант",
            "bank-transfer-title": "Банковский перевод",
            "donations-title": "Донаты",
            "crypto-title": "Криптовалюта",
            "bank-desc": "Самый удобный способ без комиссии",
            "donations-desc": "Если хотите, чтобы ваше сообщение появилось на стриме",
            "crypto-desc": "Для ценителей анонимности и современных технологий",
            "copy-to-clipboard": "Нажмите, чтобы скопировать",
            "copied-feedback": "Скопировано!",
            "share-title": "Конструктор ссылки",
            "share-desc": "Выберите секции, которые хотите показать:",
            "share-copy": "Копировать",
            "share-copied": "Скопировано!",
            "share-button-aria": "Поделиться",
            "share-header": "Заголовок",
            "share-alt-header": "Альтернативный заголовок",
            "share-subtitle": "Подзаголовок",
            "share-full-name": "ФИО",
            "optimal": "Оптимально",
            "lts": "Долгосрочная поддержка"
        },
        en: {
            "page-title": "ineedmypills",
            "main-title": "ineedmypills",
            "alt-header-title": "Milky",
            "full-name": "Glukhikh Egor Alekseevich",
            "specialist": "Beginning versatile IT \"specialist\"",
            "skills-title": "Technical Skills",
            "lang-title": "Programming Languages",
            "software-title": "Software",
            "ai-skill": "AI Proficiency",
            "projects-title": "Key Projects",
            "games-category-title": "Games",
            "software-category-title": "Software",
            "fh3-desc": "Unofficial remake of Final Hours 3 game",
            "npc-desc": "\"Experience what it's like to be a non-playable character.\"",
            "npc-jam": "Game for",
            "judges-5th": "5th place (judges)",
            "players-28th": "28th place (players)",
            "kolobok-desc": "Engaging 3D shooter-platformer inspired by \"My Friend Pedro\", with a side view in \"Cyberpunk\" style",
            "obs-desc": "Compact on-screen indicator for OBS Studio recording and replay buffer status",
            "completed": "Completed project",
            "in-progress": "In development",
            "course-completed": "Finished",
            "course-in-progress": "In progress",
            "education-title": "Education",
            "secondary-edu": "General secondary education",
            "11-classes": "11 grades",
            "computer-academy": "TOP Computer Academy",
            "specialization": "Specialization: software development",
            "first-year": "1st course",
            "second-year": "2nd course",
            "third-year": "3rd course",
            "first-place": "1st place in the group",
            "project-defense": "Defended Unreal Engine project",
            "contacts-title": "Contacts",
            "about-title": "About Me",
            "about-text": "Passionate game developer with a versatile technical background. Deeply engaged in game creation from concept to release. Participate in Game Jams to hone skills in tight deadlines. Experiment with AI integration in creative processes. Possess persistence in completing projects and a creative approach to solving technical challenges. Continuously learning new technologies and development tools.",
            "interest-gamedev": "Indie Game Development",
            "interest-software": "Software Development",
            "interest-ai": "Generative Art and Neural Networks",
            "interest-music": "Electronic Music Creation",
            "interest-youtuber": "YouTuber",
            "support-title": "Support",
            "t-bank": "T-Bank",
            "no-commission": "No commission",
            "commission-3.5": "Commission 3.5%",
            "commission-10": "Commission 10%",
            "recommended": "Recommended",
            "not-recommended-rf": "not recommended for RF",
            "backup-option": "Backup option",
            "bank-transfer-title": "Bank Transfer",
            "donations-title": "Donations",
            "crypto-title": "Cryptocurrency",
            "bank-desc": "The most convenient way with no commission",
            "donations-desc": "If you want your message to appear on the stream",
            "crypto-desc": "For connoisseurs of anonymity and modern technology",
            "copy-to-clipboard": "Click to copy",
            "copied-feedback": "Copied!",
            "share-title": "Link Builder",
            "share-desc": "Select sections to display:",
            "share-copy": "Copy",
            "share-copied": "Copied!",
            "share-button-aria": "Share",
            "share-header": "Header",
            "share-alt-header": "Alternative Header",
            "share-subtitle": "Subtitle",
            "share-full-name": "Full Name",
            "optimal": "Optimal",
            "lts": "Long Term Support"
        }
    };

    const BIRTH_DATE = '2006-06-12';

    const state = {
        lang: 'ru',
        theme: 'light',
    };

    const selectors = {
        themeToggle: '#themeToggle',
        agePlaceholder: '#agePlaceholder',
        shareButton: '#shareButton',
        shareModal: '#shareModal',
        shareModalClose: '#shareModalCloseButton',
        shareOptions: '#shareOptions',
        shareLinkInput: '#shareLinkInput',
        copyLinkButton: '#copyLinkButton',
        headerOptionsSubgroup: '#header-options-subgroup',
        youtuberButton: '#youtuber-button',
        gamedevInterestBadge: '#gamedev-interest-badge',
        softwareInterestBadge: '#software-interest-badge',
        translatableElement: '[data-key]',
        animateOnScroll: '.animate-on-scroll',
        staggerChild: '.stagger-child',
        cryptoButton: '[data-address]',
        awardBadge: '[data-award-url]',
        contentSection: 'main.content > section[id]',
    };

    const getElement = (selector) => document.querySelector(selector);
    const getElements = (selector) => document.querySelectorAll(selector);

    const applyLanguage = (lang) => {
        state.lang = lang;
        document.documentElement.lang = lang;
        document.title = translations[lang]['page-title'] ?? 'ineedmypills';

        getElements(selectors.translatableElement).forEach(el => {
            const key = el.dataset.key;
            if (key && translations[lang]?.[key]) {
                el.textContent = translations[lang][key];
            }
        });

        getElement(selectors.shareButton)?.setAttribute('aria-label', translations[lang]['share-button-aria']);
        displayAge();
    };

    const initLanguage = () => {
        const browserLang = navigator.language || navigator.userLanguage;
        applyLanguage(browserLang.startsWith('ru') ? 'ru' : 'en');
    };

    const applyTheme = (theme) => {
        state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            console.warn('LocalStorage is not available.');
        }
    };

    const initTheme = () => {
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

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const displayAge = () => {
        const agePlaceholder = getElement(selectors.agePlaceholder);
        if (!agePlaceholder) return;
        const age = calculateAge(BIRTH_DATE);
        agePlaceholder.textContent = state.lang === 'ru' ? `Возраст: ${age} лет` : `Age: ${age} years`;
    };

    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                entry.target.querySelectorAll(selectors.staggerChild).forEach((child, index) => {
                    child.style.transitionDelay = `${index * 100}ms`;
                });
                observerInstance.unobserve(entry.target);
            });
        }, { threshold: 0.1 });
        getElements(selectors.animateOnScroll).forEach(el => observer.observe(el));
    };

    const initShareModal = () => {
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

    const handleSharedLinkView = () => {
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

    const setupInterestLink = (buttonId, sectionId) => {
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

    const initRunawayButton = () => {
        const button = getElement(selectors.youtuberButton);
        if (!button) return;

        const container = button.parentElement;
        const LEASH = 35;
        const ACTIVATION_RADIUS = LEASH * 3.5;
        let isInitialized = false;
        let initialTop, initialLeft;
        let animationFrameId = null;

        const initPosition = () => {
            if (isInitialized) return;
            initialTop = button.offsetTop;
            initialLeft = button.offsetLeft;
            button.style.position = 'relative';
            isInitialized = true;
        };

        const onMouseMove = (e) => {
            initPosition();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                const rect = container.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                const btnCenterX = initialLeft + button.offsetWidth / 2;
                const btnCenterY = initialTop + button.offsetHeight / 2;
                const dx = mouseX - btnCenterX;
                const dy = mouseY - btnCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < ACTIVATION_RADIUS) {
                    const angle = Math.atan2(dy, dx);
                    const force = 1 - (distance / ACTIVATION_RADIUS);
                    const moveX = -Math.cos(angle) * LEASH * force;
                    const moveY = -Math.sin(angle) * LEASH * force;
                    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    button.style.transform = 'translate(0, 0)';
                }
            });
        };

        const onMouseLeave = () => {
            if (!isInitialized) return;
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            button.style.transform = 'translate(0, 0)';
        };

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseLeave);
    };

    const initClickDelegation = () => {
        let lastCopied = { element: null, timeoutId: null };

        document.body.addEventListener('click', e => {
            const awardBadge = e.target.closest(selectors.awardBadge);
            if (awardBadge) {
                e.preventDefault();
                window.open(awardBadge.dataset.awardUrl, '_blank', 'noopener,noreferrer');
                return;
            }

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

    const initInteractiveElements = () => {
        initClickDelegation();
        setupInterestLink(selectors.gamedevInterestBadge.substring(1), 'games-projects');
        setupInterestLink(selectors.softwareInterestBadge.substring(1), 'software-projects');
        initRunawayButton();
    };

    const main = () => {
        initTheme();
        initLanguage();
        handleSharedLinkView();
        initScrollAnimations();
        initShareModal();
        initInteractiveElements();
    };

    document.addEventListener('DOMContentLoaded', main);
})();
