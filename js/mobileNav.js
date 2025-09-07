export function initMobileNav() {
    const toggleButton = document.getElementById('mobileNavToggle');
    const overlay = document.getElementById('mobile-nav-overlay');
    const navContainer = document.getElementById('mobile-nav-container');

    if (!toggleButton || !overlay || !navContainer) {
        return;
    }

    const navLinks = navContainer.querySelectorAll('.side-nav-link');

    const toggleMenu = () => {
        document.body.classList.toggle('mobile-nav-open');
    };

    toggleButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (document.body.classList.contains('mobile-nav-open')) {
                toggleMenu();
            }
        });
    });
}
