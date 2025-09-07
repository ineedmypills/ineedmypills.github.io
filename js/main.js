import { selectors } from './state.js';
import {
    initLanguage,
    initTheme,
    initClickDelegation,
    setupInterestLink
} from './ui.js';
import { initScrollAnimations, initRunawayButton } from './animations.js';
import { initShareModal, handleSharedLinkView, getVisibleSections, ALL_SECTIONS } from './share.js';
import { renderAll, renderNavLinks } from './renderer.js';
import { initNavigation } from './nav.js';

const initInteractiveElements = () => {
    initClickDelegation();
    setupInterestLink(selectors.gamedevInterestBadge, 'games-projects');
    setupInterestLink(selectors.softwareInterestBadge, 'software-projects');
    initRunawayButton();
};

const main = () => {
    handleSharedLinkView();

    const visibleItems = getVisibleSections();
    const visibleContentSections = ALL_SECTIONS.filter(s => visibleItems.has(s));

    if (visibleContentSections.length > 1) {
        renderNavLinks('#side-nav-container');
        renderNavLinks('#mobile-nav-container');
        initNavigation();
    } else {
        document.getElementById('side-nav-container')?.remove();
        document.getElementById('mobile-nav-container')?.remove();
        document.getElementById('mobileNavToggle')?.remove();
    }

    renderAll();
    initTheme();
    initLanguage();
    initScrollAnimations();
    initShareModal();
    initInteractiveElements();
};

document.addEventListener('DOMContentLoaded', main);
