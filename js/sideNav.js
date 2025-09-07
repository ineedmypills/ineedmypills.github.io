export function initSideNav() {
    const navContainer = document.getElementById('side-nav-container');
    const links = document.querySelectorAll('.side-nav-link');
    const sections = document.querySelectorAll('main > section');

    if (!navContainer || links.length === 0 || sections.length === 0) {
        return;
    }

    // Smooth Scrolling Logic
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer Logic
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const link = document.querySelector(`.side-nav-link[data-section="${sectionId}"]`);

            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                if (link) {
                    link.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}
