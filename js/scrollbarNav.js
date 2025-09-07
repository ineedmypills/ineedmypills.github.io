export function initScrollbarNav() {
    const container = document.getElementById('scroll-nav-container');
    const toggleButton = document.getElementById('scroll-nav-toggle');
    const thumb = document.getElementById('scroll-nav-thumb');
    const markers = document.querySelectorAll('.scroll-nav-marker');
    const sections = document.querySelectorAll('main > section');

    if (!container || !toggleButton || !thumb || markers.length === 0 || sections.length === 0) {
        return;
    }

    // Expand/Collapse Logic
    toggleButton.addEventListener('click', () => {
        container.classList.toggle('is-expanded');
    });

    // Click on markers Logic
    markers.forEach(marker => {
        marker.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = marker.getAttribute('href');
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            if (container.classList.contains('is-expanded')) {
                container.classList.remove('is-expanded');
            }
        });
    });

    // Intersection Observer for droplets
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                const marker = document.querySelector(`.scroll-nav-marker[data-section="${sectionId}"]`);
                if (entry.isIntersecting) {
                    markers.forEach(m => m.classList.remove('active'));
                    if (marker) marker.classList.add('active');
                }
            });
        },
        { root: null, rootMargin: '0px 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(section => observer.observe(section));


    // Draggable Thumb Logic
    let isDragging = false;
    const updateThumbPosition = () => {
        if (isDragging) return;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
        const thumbHeight = thumb.offsetHeight;
        const trackHeight = container.clientHeight;
        thumb.style.top = `${scrollPercent * (trackHeight - thumbHeight)}px`;
    };

    thumb.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        thumb.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none'; // Prevent text selection while dragging

        const startY = e.pageY;
        const startTop = thumb.offsetTop;

        const onMouseMove = (moveEvent) => {
            if (!isDragging) return;
            const deltaY = moveEvent.pageY - startY;
            const newTop = Math.min(container.clientHeight - thumb.offsetHeight, Math.max(0, startTop + deltaY));
            thumb.style.top = `${newTop}px`;

            const trackHeight = container.clientHeight - thumb.offsetHeight;
            const scrollPercent = newTop / trackHeight;
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

            window.scrollTo({
                top: scrollableHeight * scrollPercent,
                behavior: 'auto'
            });
        };

        const onMouseUp = () => {
            isDragging = false;
            thumb.style.cursor = 'grab';
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    window.addEventListener('scroll', updateThumbPosition);
    window.addEventListener('resize', updateThumbPosition);
    // Initial position
    updateThumbPosition();
}
