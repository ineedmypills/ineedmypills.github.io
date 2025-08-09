import { selectors } from './state.js';
import {
    initLanguage,
    initTheme,
    initClickDelegation,
    setupInterestLink
} from './ui.js';
import { initScrollAnimations, initRunawayButton } from './animations.js';
import { initShareModal, handleSharedLinkView } from './share.js';

const initInteractiveElements = () => {
    initClickDelegation();
    setupInterestLink(selectors.gamedevInterestBadge.substring(1), 'games-projects');
    setupInterestLink(selectors.softwareInterestBadge.substring(1), 'software-projects');
    initRunawayButton();
};

const main = () => {
    initTheme();
    initLanguage();
    handleSharedLinkView();
    initScrollAnimations();
    initShareModal();
    initInteractiveElements();
};

document.addEventListener('DOMContentLoaded', main);
