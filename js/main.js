import { selectors } from './state.js';
import {
    initLanguage,
    initTheme,
    initClickDelegation,
    setupInterestLink
} from './ui.js';
import { initScrollAnimations, initRunawayButton } from './animations.js';
import { initShareModal, handleSharedLinkView } from './share.js';
import { renderAll, renderSideNav } from './renderer.js';
import { initSideNav } from './sideNav.js';

const initInteractiveElements = () => {
    initClickDelegation();
    setupInterestLink(selectors.gamedevInterestBadge, 'games-projects');
    setupInterestLink(selectors.softwareInterestBadge, 'software-projects');
    initRunawayButton();
};

const main = () => {
    handleSharedLinkView();
    renderSideNav();
    renderAll();
    initTheme();
    initLanguage();
    initScrollAnimations();
    initShareModal();
    initInteractiveElements();
    initSideNav();
};

document.addEventListener('DOMContentLoaded', main);
