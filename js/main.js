import { selectors } from './state.js';
import {
    initLanguage,
    initTheme,
    initClickDelegation,
    setupInterestLink
} from './ui.js';
import { initScrollAnimations, initRunawayButton } from './animations.js';
import { initShareModal, handleSharedLinkView } from './share.js';
import { renderAll } from './renderer.js';
import { initScrollbarNav } from './scrollbarNav.js';

const initInteractiveElements = () => {
    initClickDelegation();
    setupInterestLink(selectors.gamedevInterestBadge, 'games-projects');
    setupInterestLink(selectors.softwareInterestBadge, 'software-projects');
    initRunawayButton();
};

const main = () => {
    handleSharedLinkView();
    renderAll();
    initTheme();
    initLanguage();
    initScrollAnimations();
    initShareModal();
    initInteractiveElements();
    initScrollbarNav();
};

document.addEventListener('DOMContentLoaded', main);
