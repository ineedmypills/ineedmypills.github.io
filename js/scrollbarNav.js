export function initScrollbarNav() {
    const scrollbarNav = document.getElementById('custom-scrollbar-nav');
    const sections = document.querySelectorAll('main > section');
    const markers = document.querySelectorAll('.scrollbar-marker');

    if (!scrollbarNav || sections.length === 0 || markers.length === 0) {
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const marker = document.querySelector(`.scrollbar-marker[data-section="${sectionId}"]`);

            if (entry.isIntersecting) {
                markers.forEach(m => m.classList.remove('active'));
                if (marker) {
                    marker.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    markers.forEach(marker => {
        marker.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = marker.getAttribute('href');
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
