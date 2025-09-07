import { selectors } from './state.js';
import {
    initLanguage,
    initTheme,
    initClickDelegation,
    setupInterestLink
} from './ui.js';
import { initScrollAnimations, initRunawayButton } from './animations.js';
import { initShareModal, handleSharedLinkView } from './share.js';
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
    renderNavLinks('#side-nav-container');
    renderNavLinks('#mobile-nav-container');
    renderAll();
    initTheme();
    initLanguage();
    initScrollAnimations();
    initShareModal();
    initInteractiveElements();
    initNavigation();
};

document.addEventListener('DOMContentLoaded', main);
