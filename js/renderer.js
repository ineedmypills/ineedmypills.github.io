import { state } from './state.js';
import { getElement, applyLanguage, displayAge } from './ui.js';
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

    skillsSection.innerHTML = `
        <h2 class="section-title translate-element animate-on-scroll" data-key="skills-title"></h2>
        <div class="content-group animate-on-scroll">
            <div class="stagger-child">
                <h3 class="group-title translate-element" data-key="lang-title"></h3>
                <div class="skills-container" id="languages-skills"></div>
            </div>
            <div class="content-divider stagger-child"></div>
            <div class="stagger-child">
                <h3 class="group-title translate-element" data-key="software-title"></h3>
                <div class="skills-container" id="software-skills"></div>
            </div>
        </div>
    `;
    getElement('#languages-skills').append(...skills.languages.map(createSkill));
    getElement('#software-skills').append(...skills.software.map(createSkill));
};

const renderProjects = () => {
    const projectsSection = getElement('#projects-section');
    if (!projectsSection) return;

    const createProjectCard = (project) => `
        <article class="project-card">
             <div class="awards-container">${(project.awards || []).map(award => `
                <a href="${award.url}" target="_blank" rel="noopener noreferrer" class="award-badge" data-award-url="${award.url}">
                    <span class="material-icons-outlined" aria-hidden="true">${award.textKey.includes('judges') ? 'emoji_events' : 'star_border'}</span>
                    <span class="translate-element" data-key="${award.textKey}"></span>
                </a>
            `).join('')}</div>
            <div class="project-header">
                <div class="project-title-wrapper">
                    <h3 class="project-title"><a href="${project.url}" target="_blank" rel="noopener noreferrer" class="stretched-link translate-element" data-key="${project.titleKey}"></a></h3>
                    ${icons[project.platform] || ''}
                </div>
                <p class="project-desc translate-element" data-key="${project.descriptionKey}"></p>
                ${project.jam ? `<div class="project-meta">
                    <p class="project-jam-info">
                        <span class="translate-element" data-key="${project.jam.textKey}"></span>
                        <a href="${project.jam.url}" target="_blank" rel="noopener noreferrer" class="jam-link">${project.jam.name}</a>
                    </p>
                </div>` : ''}
                 ${project.disclaimerKey ? `<div class="project-disclaimer"><p class="translate-element" data-key="${project.disclaimerKey}"></p></div>` : ''}
            </div>
            <div class="card-footer">
                <div class="footer-group-left">
                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github-badge">${icons.github}GitHub</a>` : ''}
                    ${(project.tags || []).map(tag => `
                        <div class="tech-badge lts-badge">
                            <span class="material-icons-outlined" aria-hidden="true">update</span>
                            <span class="translate-element" data-key="${tag.key}"></span>
                        </div>
                    `).join('')}
                </div>
                <div class="status-badge status-badge--${project.statusKey === 'defended' ? 'completed' : project.statusKey}">
                    <span class="material-icons-outlined" aria-hidden="true">${project.statusKey === 'defended' ? 'shield' : 'check'}</span>
                    <span class="translate-element" data-key="${project.statusKey}"></span>
                </div>
            </div>
        </article>`;

    const createSoftwareCard = (item) => `
        <article class="project-card">
            <div class="project-header">
                <div class="project-title-wrapper">
                    <h3 class="project-title"><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="stretched-link translate-element" data-key="${item.titleKey}"></a></h3>
                </div>
                <p class="project-desc translate-element" data-key="${item.descriptionKey}"></p>
            </div>
            <div class="card-footer">
                <div class="footer-group-left">
                    <div class="tech-badge ${item.tech.toLowerCase()}-tech">
                        <span class="material-icons-outlined" aria-hidden="true">code</span>
                        ${item.tech}
                    </div>
                </div>
                <div class="status-badge status-badge--ready">
                    <span class="material-icons-outlined" aria-hidden="true">rocket_launch</span>
                    <span class="translate-element" data-key="${item.statusKey}"></span>
                </div>
            </div>
        </article>`;

    projectsSection.innerHTML = `
        <h2 class="section-title translate-element animate-on-scroll" data-key="projects-title"></h2>
        <div class="content-group animate-on-scroll">
            <div id="games-projects" class="stagger-child">
                <h3 class="group-title translate-element" data-key="games-category-title"></h3>
                <div class="project-list">${projects.games.map(createProjectCard).join('')}</div>
            </div>
            <div class="content-divider stagger-child"></div>
            <div id="software-projects" class="stagger-child">
                ${projects.software.map(group => `
                    <div class="subgroup">
                        <h4 class="subgroup-title translate-element" data-key="${group.categoryKey}"></h4>
                        <div class="project-list">${group.items.map(createSoftwareCard).join('')}</div>
                    </div>
                `).join('')}
            </div>
        </div>`;
};

const renderEducation = () => {
    const eduSection = getElement('#education-section');
    if (!eduSection) return;

    eduSection.innerHTML = `
        <h2 class="section-title translate-element animate-on-scroll" data-key="education-title"></h2>
        <div class="content-group animate-on-scroll">
            <div class="stagger-child">
                <h3 class="group-title translate-element" data-key="${education.secondary.titleKey}"></h3>
                <p class="secondary-edu-text translate-element" data-key="${education.secondary.descriptionKey}"></p>
            </div>
            <div class="content-divider stagger-child"></div>
            <div class="stagger-child">
                <h3 class="group-title translate-element" data-key="${education.academy.nameKey}"></h3>
                <p class="specialization-desc translate-element" data-key="${education.academy.specializationKey}"></p>
                <div class="course-container">
                ${education.academy.courses.map(course => `
                    <div class="course-item">
                        <p class="course-year-title translate-element" data-key="${course.yearKey}"></p>
                        <div class="course-achievements">
                        ${(course.achievements || []).map(ach => `
                            <div class="achievement-badge achievement-badge--${ach.type}">
                                <span class="material-icons-outlined" aria-hidden="true">${ach.type === 'first-place' ? 'emoji_events' : 'shield'}</span>
                                <span class="translate-element" data-key="${ach.textKey}"></span>
                            </div>`).join('')}
                        </div>
                        <div class="course-status course-status--${course.statusKey.includes('progress') ? 'in-progress' : 'completed'}">
                            <span class="material-icons-outlined" aria-hidden="true">${course.statusKey.includes('progress') ? 'sync' : 'check'}</span>
                            <span class="translate-element" data-key="${course.statusKey}"></span>
                        </div>
                    </div>`).join('')}
                </div>
            </div>
        </div>`;
};

const renderAbout = () => {
    const aboutSection = getElement('#about-section');
    if(!aboutSection) return;

    const interestsHTML = about.interests.map(interest => {
        const commonAttrs = `class="interest-badge interest-badge--${interest.type}" ${interest.id ? `id="${interest.id}"` : ''}`;
        const content = `<span class="translate-element" data-key="${interest.key}"></span>`;

        if(interest.isButton) {
            if(interest.wrapperUrl) {
                return `<a href="${interest.wrapperUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;"><button type="button" ${commonAttrs}>${content}</button></a>`;
            }
            return `<button type="button" ${commonAttrs}>${content}</button>`;
        }
        return `<a href="${interest.url}" target="_blank" rel="noopener noreferrer" ${commonAttrs}>${content}</a>`;
    }).join('');

    aboutSection.innerHTML = `
        <h2 class="section-title translate-element animate-on-scroll" data-key="about-title"></h2>
        <div class="content-group animate-on-scroll">
            <p class="about-paragraph stagger-child translate-element" data-key="about-text"></p>
            <div class="interests-container stagger-child">${interestsHTML}</div>
            <div class="personal-info stagger-child">
                <div class="info-item">
                    <span class="material-icons-outlined" aria-hidden="true">cake</span>
                    <span id="agePlaceholder"></span>
                </div>
                <div class="info-item">
                    <span class="material-icons-outlined" aria-hidden="true">location_on</span>
                    <span class="translate-element" data-key="${personalInfo.locationKey}"></span>
                </div>
            </div>
        </div>`;
};

const renderContacts = () => {
    const contactsSection = getElement('#contacts-section');
    if (!contactsSection) return;

    contactsSection.innerHTML = `
        <h2 class="section-title translate-element animate-on-scroll" data-key="contacts-title"></h2>
        <div class="content-group animate-on-scroll">
            <div class="contacts-container stagger-child">
            ${contacts.map(contact => `
                <a href="${contact.url}" target="_blank" rel="noopener noreferrer" class="contact-card">
                    <div class="contact-icon">
                        <div class="icon-bg"></div>
                        ${icons[contact.icon]}
                    </div>
                    <div>
                        <p class="contact-label">${contact.platform}</p>
                        <p class="contact-value">${contact.username}</p>
                    </div>
                </a>`).join('')}
            </div>
        </div>`;
};

const renderSupport = () => {
    const supportSection = getElement('#support-section');
    if (!supportSection) return;

    const createSupportItem = (item) => {
        const isCrypto = !!item.address;
        const badgeHTML = item.badge ? `<div class="side-badge side-badge--${item.badge.type}"><span class="material-icons" aria-hidden="true">${item.badge.type === 'danger' ? 'warning' : (item.badge.type === 'warning' ? 'shield' : 'check_circle')}</span><span class="translate-element" data-key="${item.badge.textKey}"></span></div>` : '';
        const name = item.name ? item.name : `<span class="translate-element" data-key="${item.nameKey}"></span>`;
        const commission = `<p class="support-commission ${isCrypto ? 'crypto' : (item.name || item.nameKey).toLowerCase()}-commission translate-element" data-key="${isCrypto ? 'copy-to-clipboard' : item.commissionKey}"></p>`;

        const itemContent = `
            <div class="support-icon">
                <div class="icon-bg"></div>
                ${icons[item.icon]}
            </div>
            <div class="support-details">
                <p class="support-label">${name}</p>
                ${commission}
            </div>
            ${badgeHTML}`;

        if (isCrypto) {
            return `<button type="button" class="support-item support-crypto-${item.icon}" data-address="${item.address}" aria-label="Copy ${item.name} Address">${itemContent}</button>`;
        }
        return `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="support-item support-${item.icon.toLowerCase()}">${itemContent}</a>`;
    };

    const createSupportCategory = (category) => `
        <div class="stagger-child">
            <div class="support-title-wrapper">
                <h3 class="support-list-title group-title translate-element" data-key="${category.titleKey}"></h3>
                <p class="support-category-desc translate-element" data-key="${category.descriptionKey}"></p>
            </div>
            <div class="support-list">
                ${category.items.map(createSupportItem).join('')}
            </div>
        </div>`;

    supportSection.innerHTML = `
        <h2 class="section-title translate-element animate-on-scroll" data-key="support-title"></h2>
        <div class="content-group animate-on-scroll">
            ${createSupportCategory(support.bank)}
            ${createSupportCategory(support.donations)}
            ${createSupportCategory(support.crypto)}
        </div>`;
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
