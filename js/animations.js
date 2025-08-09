import { selectors } from './state.js';
import { getElement, getElements } from './ui.js';

export const initScrollAnimations = () => {
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

export const initRunawayButton = () => {
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
