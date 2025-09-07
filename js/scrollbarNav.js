export function initScrollbarNav() {
    const container = document.getElementById('scroll-nav-container');
    const toggleButton = document.getElementById('scroll-nav-toggle');
    const markers = document.querySelectorAll('.scroll-nav-marker');
    const sections = document.querySelectorAll('main > section');

    if (!container || !toggleButton || markers.length === 0 || sections.length === 0) {
        return;
    }

    // Expand/Collapse Logic
    toggleButton.addEventListener('click', () => {
        container.classList.toggle('is-expanded');
    });

    // Smooth Scrolling Logic
    markers.forEach(marker => {
        marker.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = marker.getAttribute('href');
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            // Collapse the menu on selection (optional, but good for UX)
            if (container.classList.contains('is-expanded')) {
                container.classList.remove('is-expanded');
            }
        });
    });

    // Intersection Observer Logic
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50% 0px', // Trigger when section is in the top half of the screen
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const marker = document.querySelector(`.scroll-nav-marker[data-section="${sectionId}"]`);

            if (entry.isIntersecting) {
                markers.forEach(m => m.classList.remove('active'));
                if (marker) {
                    marker.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}
