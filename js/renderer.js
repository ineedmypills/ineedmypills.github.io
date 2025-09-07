import { state } from './state.js';
import { getElement, applyLanguage, displayAge } from './ui.js';
import { getVisibleSections } from './share.js';
import { personalInfo, skills, projects, education, about, contacts, support } from './data.js';
import { icons } from './icons.js';
const renderSkills = () => {
const skillsSection = getElement('#skills-section');
if (!skillsSection) return;
const createSkill = (skill) => {
const a = document.createElement('a');
a.href = skill.url;
a.target = '_blank';
a.rel = 'noopener noreferrer';
a.className = `skill skill-${skill.id}`;
if (skill.nameKey) {
a.dataset.key = skill.nameKey;
a.classList.add('translate-element');
} else {
a.textContent = skill.name;
}
return a;
};
skillsSection.innerHTML = '';
const title = document.createElement('h2');
title.className = 'section-title translate-element animate-on-scroll';
title.dataset.key = 'skills-title';
const contentGroup = document.createElement('div');
contentGroup.className = 'content-group animate-on-scroll';
const langContainer = document.createElement('div');
langContainer.className = 'stagger-child';
const langTitle = document.createElement('h3');
langTitle.className = 'group-title translate-element';
langTitle.dataset.key = 'lang-title';
const langSkills = document.createElement('div');
langSkills.className = 'skills-container';
langSkills.id = 'languages-skills';
langSkills.append(...skills.languages.map(createSkill));
langContainer.append(langTitle, langSkills);
const divider = document.createElement('div');
divider.className = 'content-divider stagger-child';
const softwareContainer = document.createElement('div');
softwareContainer.className = 'stagger-child';
const softwareTitle = document.createElement('h3');
softwareTitle.className = 'group-title translate-element';
softwareTitle.dataset.key = 'software-title';
const softwareSkills = document.createElement('div');
softwareSkills.className = 'skills-container';
softwareSkills.id = 'software-skills';
softwareSkills.append(...skills.software.map(createSkill));
softwareContainer.append(softwareTitle, softwareSkills);
contentGroup.append(langContainer, divider, softwareContainer);
skillsSection.append(title, contentGroup);
};
const renderProjects = () => {
const projectsSection = getElement('#projects-section');
if (!projectsSection) return;
const createProjectCard = (project) => {
const card = document.createElement('article');
card.className = 'project-card';
const awardsContainer = document.createElement('div');
awardsContainer.className = 'awards-container';
if (project.awards) {
project.awards.forEach(award => {
const link = document.createElement('a');
link.href = award.url;
link.target = '_blank';
link.rel = 'noopener noreferrer';
link.className = 'award-badge';
link.dataset.awardUrl = award.url;
link.innerHTML = `
<span class="material-icons-outlined" aria-hidden="true">${award.textKey.includes('judges') ? 'emoji_events' : 'star_border'}</span>
<span class="translate-element" data-key="${award.textKey}"></span>`;
awardsContainer.append(link);
});
}
const header = document.createElement('div');
header.className = 'project-header';
const titleWrapper = document.createElement('div');
titleWrapper.className = 'project-title-wrapper';
const title = document.createElement('h3');
title.className = 'project-title';
const titleLink = document.createElement('a');
titleLink.href = project.url;
titleLink.target = '_blank';
titleLink.rel = 'noopener noreferrer';
titleLink.className = 'stretched-link translate-element';
titleLink.dataset.key = project.titleKey;
title.append(titleLink);
titleWrapper.append(title);
if (icons[project.platform]) {
titleWrapper.insertAdjacentHTML('beforeend', icons[project.platform]);
}
const desc = document.createElement('p');
desc.className = 'project-desc translate-element';
desc.dataset.key = project.descriptionKey;
header.append(titleWrapper, desc);
if (project.jam) {
const meta = document.createElement('div');
meta.className = 'project-meta';
const jamInfo = document.createElement('p');
jamInfo.className = 'project-jam-info';
jamInfo.innerHTML = `<span class="translate-element" data-key="${project.jam.textKey}"></span>
<a href="${project.jam.url}" target="_blank" rel="noopener noreferrer" class="jam-link">${project.jam.name}</a>`;
meta.append(jamInfo);
header.append(meta);
}
if (project.disclaimerKey) {
const disclaimer = document.createElement('div');
disclaimer.className = 'project-disclaimer';
const disclaimerText = document.createElement('p');
disclaimerText.className = 'translate-element';
disclaimerText.dataset.key = project.disclaimerKey;
disclaimer.append(disclaimerText);
header.append(disclaimer);
}
const footer = document.createElement('div');
footer.className = 'card-footer';
const footerLeft = document.createElement('div');
footerLeft.className = 'footer-group-left';
if (project.github) {
const githubBadge = document.createElement('a');
githubBadge.href = project.github;
githubBadge.target = '_blank';
githubBadge.rel = 'noopener noreferrer';
githubBadge.className = 'github-badge';
githubBadge.innerHTML = `${icons.github}GitHub`;
footerLeft.append(githubBadge);
}
if (project.tags) {
project.tags.forEach(tag => {
const tagBadge = document.createElement('div');
tagBadge.className = 'tech-badge lts-badge';
tagBadge.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">update</span>
<span class="translate-element" data-key="${tag.key}"></span>`;
footerLeft.append(tagBadge);
});
}
const status = document.createElement('div');
status.className = `status-badge status-badge--${project.statusKey === 'defended' ? 'completed' : project.statusKey}`;
status.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">${project.statusKey === 'defended' ? 'shield' : 'check'}</span>
<span class="translate-element" data-key="${project.statusKey}"></span>`;
footer.append(footerLeft, status);
card.append(awardsContainer, header, footer);
return card;
};
const createSoftwareCard = (item) => {
const card = document.createElement('article');
card.className = 'project-card';
const header = document.createElement('div');
header.className = 'project-header';
const titleWrapper = document.createElement('div');
titleWrapper.className = 'project-title-wrapper';
const title = document.createElement('h3');
title.className = 'project-title';
const titleLink = document.createElement('a');
titleLink.href = item.url;
titleLink.target = '_blank';
titleLink.rel = 'noopener noreferrer';
titleLink.className = 'stretched-link translate-element';
titleLink.dataset.key = item.titleKey;
title.append(titleLink);
titleWrapper.append(title);
const desc = document.createElement('p');
desc.className = 'project-desc translate-element';
desc.dataset.key = item.descriptionKey;
header.append(titleWrapper, desc);
const footer = document.createElement('div');
footer.className = 'card-footer';
const footerLeft = document.createElement('div');
footerLeft.className = 'footer-group-left';
const techBadge = document.createElement('div');
const techClass = item.tech.toLowerCase().replace('#', 'sharp');
techBadge.className = `tech-badge ${techClass}-tech`;
techBadge.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">code</span>
${item.tech}`;
footerLeft.append(techBadge);
const status = document.createElement('div');
status.className = 'status-badge status-badge--ready';
status.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">rocket_launch</span>
<span class="translate-element" data-key="${item.statusKey}"></span>`;
footer.append(footerLeft, status);
card.append(header, footer);
return card;
};
projectsSection.innerHTML = '';
const title = document.createElement('h2');
title.className = 'section-title translate-element animate-on-scroll';
title.dataset.key = 'projects-title';
const contentGroup = document.createElement('div');
contentGroup.className = 'content-group animate-on-scroll';
const gamesProjects = document.createElement('div');
gamesProjects.id = 'games-projects';
gamesProjects.className = 'stagger-child';
const gamesTitle = document.createElement('h3');
gamesTitle.className = 'group-title translate-element';
gamesTitle.dataset.key = 'games-category-title';
const gamesList = document.createElement('div');
gamesList.className = 'project-list';
gamesList.append(...projects.games.map(createProjectCard));
gamesProjects.append(gamesTitle, gamesList);
const divider = document.createElement('div');
divider.className = 'content-divider stagger-child';
const softwareProjects = document.createElement('div');
softwareProjects.id = 'software-projects';
softwareProjects.className = 'stagger-child';
projects.software.forEach(group => {
const subgroup = document.createElement('div');
subgroup.className = 'subgroup';
const subgroupTitle = document.createElement('h4');
subgroupTitle.className = 'subgroup-title translate-element';
subgroupTitle.dataset.key = group.categoryKey;
const subgroupList = document.createElement('div');
subgroupList.className = 'project-list';
subgroupList.append(...group.items.map(createSoftwareCard));
subgroup.append(subgroupTitle, subgroupList);
softwareProjects.append(subgroup);
});
contentGroup.append(gamesProjects, divider, softwareProjects);
projectsSection.append(title, contentGroup);
};
const renderEducation = () => {
const eduSection = getElement('#education-section');
if (!eduSection) return;
eduSection.innerHTML = '';
const title = document.createElement('h2');
title.className = 'section-title translate-element animate-on-scroll';
title.dataset.key = 'education-title';
const contentGroup = document.createElement('div');
contentGroup.className = 'content-group animate-on-scroll';
const secondaryEdu = document.createElement('div');
secondaryEdu.className = 'stagger-child';
const secondaryTitle = document.createElement('h3');
secondaryTitle.className = 'group-title translate-element';
secondaryTitle.dataset.key = education.secondary.titleKey;
const secondaryDesc = document.createElement('p');
secondaryDesc.className = 'secondary-edu-text translate-element';
secondaryDesc.dataset.key = education.secondary.descriptionKey;
secondaryEdu.append(secondaryTitle, secondaryDesc);
const divider = document.createElement('div');
divider.className = 'content-divider stagger-child';
const academyEdu = document.createElement('div');
academyEdu.className = 'stagger-child';
const academyTitle = document.createElement('h3');
academyTitle.className = 'group-title translate-element';
academyTitle.dataset.key = education.academy.nameKey;
const academySpec = document.createElement('p');
academySpec.className = 'specialization-desc translate-element';
academySpec.dataset.key = education.academy.specializationKey;
const courseContainer = document.createElement('div');
courseContainer.className = 'course-container';
education.academy.courses.forEach(course => {
const courseItem = document.createElement('div');
courseItem.className = 'course-item';
const courseYear = document.createElement('p');
courseYear.className = 'course-year-title translate-element';
courseYear.dataset.key = course.yearKey;
const achievements = document.createElement('div');
achievements.className = 'course-achievements';
if (course.achievements) {
course.achievements.forEach(ach => {
const badge = document.createElement('div');
badge.className = `achievement-badge achievement-badge--${ach.type}`;
badge.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">${ach.type === 'first-place' ? 'emoji_events' : 'shield'}</span>
<span class="translate-element" data-key="${ach.textKey}"></span>`;
achievements.append(badge);
});
}
const status = document.createElement('div');
status.className = `course-status course-status--${course.statusKey.includes('progress') ? 'in-progress' : 'completed'}`;
status.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">${course.statusKey.includes('progress') ? 'sync' : 'check'}</span>
<span class="translate-element" data-key="${course.statusKey}"></span>`;
courseItem.append(courseYear, achievements, status);
courseContainer.append(courseItem);
});
academyEdu.append(academyTitle, academySpec, courseContainer);
contentGroup.append(secondaryEdu, divider, academyEdu);
eduSection.append(title, contentGroup);
};
const renderAbout = () => {
const aboutSection = getElement('#about-section');
if(!aboutSection) return;
aboutSection.innerHTML = '';
const title = document.createElement('h2');
title.className = 'section-title translate-element animate-on-scroll';
title.dataset.key = 'about-title';
const contentGroup = document.createElement('div');
contentGroup.className = 'content-group animate-on-scroll';
const aboutParagraph = document.createElement('p');
aboutParagraph.className = 'about-paragraph stagger-child translate-element';
aboutParagraph.dataset.key = 'about-text';
const interestsContainer = document.createElement('div');
interestsContainer.className = 'interests-container stagger-child';
about.interests.forEach(interest => {
const content = document.createElement('span');
content.className = 'translate-element';
content.dataset.key = interest.key;
let element;
if (interest.isButton) {
element = document.createElement('button');
element.type = 'button';
element.append(content);
if (interest.wrapperUrl) {
const wrapper = document.createElement('a');
wrapper.href = interest.wrapperUrl;
wrapper.target = '_blank';
wrapper.rel = 'noopener noreferrer';
wrapper.style.textDecoration = 'none';
wrapper.append(element);
interestsContainer.append(wrapper);
} else {
interestsContainer.append(element);
}
} else {
element = document.createElement('a');
element.href = interest.url;
element.target = '_blank';
element.rel = 'noopener noreferrer';
element.append(content);
interestsContainer.append(element);
}
element.className = `interest-badge interest-badge--${interest.type}`;
if (interest.id) {
element.id = interest.id;
}
});
const personalInfoContainer = document.createElement('div');
personalInfoContainer.className = 'personal-info stagger-child';
const ageItem = document.createElement('div');
ageItem.className = 'info-item';
ageItem.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">cake</span><span id="agePlaceholder"></span>`;
const locationItem = document.createElement('div');
locationItem.className = 'info-item';
locationItem.innerHTML = `<span class="material-icons-outlined" aria-hidden="true">location_on</span><span class="translate-element" data-key="${personalInfo.locationKey}"></span>`;
personalInfoContainer.append(ageItem, locationItem);
contentGroup.append(aboutParagraph, interestsContainer, personalInfoContainer);
aboutSection.append(title, contentGroup);
};
const renderContacts = () => {
const contactsSection = getElement('#contacts-section');
if (!contactsSection) return;
contactsSection.innerHTML = '';
const title = document.createElement('h2');
title.className = 'section-title translate-element animate-on-scroll';
title.dataset.key = 'contacts-title';
const contentGroup = document.createElement('div');
contentGroup.className = 'content-group animate-on-scroll';
const contactsContainer = document.createElement('div');
contactsContainer.className = 'contacts-container stagger-child';
contacts.forEach(contact => {
const card = document.createElement('a');
card.href = contact.url;
card.target = '_blank';
card.rel = 'noopener noreferrer';
card.className = 'contact-card';
const iconDiv = document.createElement('div');
iconDiv.className = 'contact-icon';
iconDiv.innerHTML = `<div class="icon-bg"></div>${icons[contact.icon]}`;
const detailsDiv = document.createElement('div');
const label = document.createElement('p');
label.className = 'contact-label';
label.textContent = contact.platform;
const value = document.createElement('p');
value.className = 'contact-value';
value.textContent = contact.username;
detailsDiv.append(label, value);
card.append(iconDiv, detailsDiv);
contactsContainer.append(card);
});
contentGroup.append(contactsContainer);
contactsSection.append(title, contentGroup);
};
const renderSupport = () => {
const supportSection = getElement('#support-section');
if (!supportSection) return;
const createSupportItem = (item) => {
const isCrypto = !!item.address;
const itemElement = isCrypto ? document.createElement('button') : document.createElement('a');
itemElement.className = `support-item support-${item.icon.toLowerCase()}`;
if (isCrypto) {
itemElement.type = 'button';
itemElement.dataset.address = item.address;
itemElement.setAttribute('aria-label', `Copy ${item.name} Address`);
itemElement.classList.add(`support-crypto-${item.icon}`);
} else {
itemElement.href = item.url;
itemElement.target = '_blank';
itemElement.rel = 'noopener noreferrer';
}
const iconDiv = document.createElement('div');
iconDiv.className = 'support-icon';
iconDiv.innerHTML = `<div class="icon-bg"></div>${icons[item.icon]}`;
const detailsDiv = document.createElement('div');
detailsDiv.className = 'support-details';
const label = document.createElement('p');
label.className = 'support-label';
if (item.name) {
label.textContent = item.name;
} else {
const nameSpan = document.createElement('span');
nameSpan.className = 'translate-element';
nameSpan.dataset.key = item.nameKey;
label.append(nameSpan);
}
const commission = document.createElement('p');
const commissionClass = isCrypto ? 'crypto' : (item.name || item.nameKey).toLowerCase();
commission.className = `support-commission ${commissionClass}-commission translate-element`;
commission.dataset.key = isCrypto ? 'copy-to-clipboard' : item.commissionKey;
detailsDiv.append(label, commission);
itemElement.append(iconDiv, detailsDiv);
if (item.badge) {
const badge = document.createElement('div');
badge.className = `side-badge side-badge--${item.badge.type}`;
badge.innerHTML = `<span class="material-icons" aria-hidden="true">${item.badge.type === 'danger' ? 'warning' : (item.badge.type === 'warning' ? 'shield' : 'check_circle')}</span><span class="translate-element" data-key="${item.badge.textKey}"></span>`;
itemElement.append(badge);
}
return itemElement;
};
const createSupportCategory = (category) => {
const categoryContainer = document.createElement('div');
categoryContainer.className = 'stagger-child';
const titleWrapper = document.createElement('div');
titleWrapper.className = 'support-title-wrapper';
const title = document.createElement('h3');
title.className = 'support-list-title group-title translate-element';
title.dataset.key = category.titleKey;
const desc = document.createElement('p');
desc.className = 'support-category-desc translate-element';
desc.dataset.key = category.descriptionKey;
titleWrapper.append(title, desc);
const list = document.createElement('div');
list.className = 'support-list';
list.append(...category.items.map(createSupportItem));
categoryContainer.append(titleWrapper, list);
return categoryContainer;
};
supportSection.innerHTML = '';
const title = document.createElement('h2');
title.className = 'section-title translate-element animate-on-scroll';
title.dataset.key = 'support-title';
const contentGroup = document.createElement('div');
contentGroup.className = 'content-group animate-on-scroll';
contentGroup.append(
createSupportCategory(support.bank),
createSupportCategory(support.donations),
createSupportCategory(support.crypto)
);
supportSection.append(title, contentGroup);
};
export const renderNavLinks = (containerSelector) => {
    const navContainer = getElement(containerSelector);
    if (!navContainer) return;

    const allSections = [
        { id: 'skills-section', titleKey: 'skills-title', name: 'skills' },
        { id: 'projects-section', titleKey: 'projects-title', name: 'projects' },
        { id: 'education-section', titleKey: 'education-title', name: 'education' },
        { id: 'about-section', titleKey: 'about-title', name: 'about' },
        { id: 'contacts-section', titleKey: 'contacts-title', name: 'contacts' },
        { id: 'support-section', titleKey: 'support-title', name: 'support' },
    ];

    const visibleSections = getVisibleSections();
    const sectionsToRender = allSections.filter(s => visibleSections.has(s.name));

    sectionsToRender.forEach(section => {
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.className = 'side-nav-link translate-element';
        link.dataset.section = section.id;
        link.dataset.key = section.titleKey;
        navContainer.append(link);
    });
};

export function renderAll() {
    renderSkills();
    renderProjects();
    renderEducation();
    renderAbout();
    renderContacts();
    renderSupport();
    applyLanguage(state.lang);
    displayAge();
}
