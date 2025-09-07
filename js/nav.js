export function initNavigation() {
    // --- Desktop Side Nav Logic ---
    const sideNavContainer = document.getElementById('side-nav-container');
    if (sideNavContainer) {
        const links = sideNavContainer.querySelectorAll('.side-nav-link');
        const sections = document.querySelectorAll('main > section');

        if (links.length > 0 && sections.length > 0) {
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const section = document.querySelector(link.getAttribute('href'));
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                });
            });

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        const sectionId = entry.target.id;
                        const link = sideNavContainer.querySelector(`.side-nav-link[data-section="${sectionId}"]`);
                        if (entry.isIntersecting) {
                            links.forEach(l => l.classList.remove('active'));
                            if (link) link.classList.add('active');
                        }
                    });
                },
                { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
            );
            sections.forEach(section => observer.observe(section));
        }
    }

    // --- Mobile Nav Logic ---
    const toggleButton = document.getElementById('mobileNavToggle');
    const overlay = document.getElementById('mobile-nav-overlay');
    const mobileNavContainer = document.getElementById('mobile-nav-container');

    if (toggleButton && overlay && mobileNavContainer) {
        const mobileNavLinks = mobileNavContainer.querySelectorAll('.side-nav-link');
        const toggleMenu = () => document.body.classList.toggle('mobile-nav-open');

        toggleButton.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = document.querySelector(link.getAttribute('href'));
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }

                if (document.body.classList.contains('mobile-nav-open')) {
                    toggleMenu();
                }
            });
        });
    }
}
