export const personalInfo = {
    birthDate: '2006-06-12',
    locationKey: 'location',
};

export const skills = {
    languages: [
        { name: 'C++', url: 'https://isocpp.org/', id: 'cpp' },
        { name: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/', id: 'csharp' },
        { name: 'Java', url: 'https://www.java.com/', id: 'java' },
        { name: 'Python', url: 'https://www.python.org/', id: 'python' },
        { name: 'SQL', url: 'https://www.w3schools.com/sql/', id: 'sql' },
    ],
    software: [
        { name: 'Android Studio', url: 'https://developer.android.com/studio', id: 'android' },
        { name: 'Davinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve', id: 'davinci' },
        { name: 'FL Studio', url: 'https://www.image-line.com/', id: 'fl' },
        { name: 'Unity', url: 'https://unity.com/', id: 'unity' },
        { name: 'Unreal Engine', url: 'https://www.unrealengine.com/', id: 'unreal' },
        { nameKey: 'ai-skill', url: 'https://gemini.google.com/', id: 'ai' },
    ],
};

export const projects = {
    games: [
        {
            titleKey: 'project-fh3-title',
            url: 'https://gamejolt.com/games/fh3redux/727752',
            platform: 'gamejolt',
            descriptionKey: 'fh3-desc',
            statusKey: 'completed',
            tags: [{key: 'lts'}],
        },
        {
            titleKey: 'project-npc-title',
            url: 'https://ineedmypills.itch.io/non-playable-character',
            platform: 'itchio',
            descriptionKey: 'npc-desc',
            jam: {
                name: "maxter's JAM 2024",
                url: 'https://itch.io/jam/maxters-jam-2024',
                textKey: 'npc-jam'
            },
            awards: [
                { textKey: 'judges-5th', url: 'https://t.me/m4xter/81' },
                { textKey: 'players-28th', url: 'https://itch.io/jam/maxters-jam-2024/results?page=2#:~:text=%D0%BE%D1%82%20ineedmypills-,28th%20%D0%BC%D0%B5%D1%81%D1%82%D0%BE,-%D1%81%2014%20%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%B0%D0%BC%D0%B8' },
            ],
            statusKey: 'completed',
        },
        {
            titleKey: 'project-kolobok-title',
            url: 'https://ineedmypills.itch.io/kolobok',
            platform: 'itchio',
            descriptionKey: 'kolobok-desc',
            disclaimerKey: 'kolobok-disclaimer',
            github: 'https://github.com/ineedmypills/Kolobok',
            statusKey: 'defended',
        },
    ],
    software: [
        {
            categoryKey: 'software-category-title',
            items: [
                {
                    titleKey: 'project-obs-indicator-title',
                    url: 'https://github.com/ineedmypills/OBS-Indicator',
                    descriptionKey: 'obs-desc',
                    tech: 'Python',
                    statusKey: 'ready-to-use',
                },
            ],
        },
        {
            categoryKey: 'Unity Engine',
            items: [
                {
                    titleKey: 'project-censor-effect-title',
                    url: 'https://github.com/ineedmypills/UnityCensorEffect',
                    descriptionKey: 'censor-effect-desc',
                    tech: 'C#',
                    statusKey: 'ready-to-use',
                },
                {
                    titleKey: 'project-scene-inspector-title',
                    url: 'https://github.com/ineedmypills/UnitySceneInspector',
                    descriptionKey: 'scene-inspector-desc',
                    tech: 'C#',
                    statusKey: 'ready-to-use',
                },
            ],
        },
    ],
};

export const education = {
    secondary: {
        titleKey: 'secondary-edu',
        descriptionKey: '11-classes',
    },
    academy: {
        nameKey: 'computer-academy',
        specializationKey: 'specialization',
        courses: [
            {
                yearKey: 'first-year',
                statusKey: 'course-completed',
                achievements: [
                    { textKey: 'first-place', type: 'first-place' },
                    { textKey: 'project-defense', type: 'defense' },
                ],
            },
            { yearKey: 'second-year', statusKey: 'course-in-progress' },
            { yearKey: 'third-year', statusKey: 'course-in-progress' },
        ],
    },
};

export const about = {
    descriptionKey: 'about-text',
    interests: [
        { key: 'interest-gamedev', type: 'gamedev', isButton: true, id: 'gamedev-interest-badge' },
        { key: 'interest-software', type: 'software', isButton: true, id: 'software-interest-badge' },
        { key: 'interest-ai', type: 'ai', isButton: true },
        { key: 'interest-music', type: 'music', isButton: false, url: 'https://soundcloud.com/ineedmypills/' },
        { key: 'interest-youtuber', type: 'youtube', isButton: true, id: 'youtuber-button', wrapperUrl: 'https://www.youtube.com/@ClubberryMilkShake' },
    ],
};

export const contacts = [
    {
        platform: 'Telegram',
        username: '@ineedmypills',
        url: 'https://t.me/ineedmypills',
        icon: 'telegram',
    },
    {
        platform: 'GitHub',
        username: '@ineedmypills',
        url: 'https://github.com/ineedmypills',
        icon: 'github',
    },
];

export const support = {
    bank: {
        titleKey: 'bank-transfer-title',
        descriptionKey: 'bank-desc',
        items: [
            {
                nameKey: 't-bank',
                url: 'https://www.tbank.ru/cf/3xlXUdjZzLW',
                commissionKey: 'no-commission',
                badge: { textKey: 'recommended', type: 'secondary' },
                icon: 'tbank',
            },
        ],
    },
    donations: {
        titleKey: 'donations-title',
        descriptionKey: 'donations-desc',
        items: [
            {
                name: 'Donatty',
                url: 'https://donatty.com/clubberrymilkshake',
                commissionKey: 'commission-3.5',
                badge: { textKey: 'backup-option', type: 'warning' },
                icon: 'donatty',
            },
            {
                name: 'DonationAlerts',
                url: 'https://donationalerts.com/r/shizaphaziya',
                commissionKey: 'commission-10',
                badge: { textKey: 'not-recommended-rf', type: 'danger' },
                icon: 'donationalerts',
            },
        ],
    },
    crypto: {
        titleKey: 'crypto-title',
        descriptionKey: 'crypto-desc',
        items: [
            {
                name: 'TON Space',
                address: 'UQALAY9I3rkVFoJKZRSMH2ikuQZkcHPV318xZMiLiLtCPsi8',
                badge: { textKey: 'optimal', type: 'success' },
                icon: 'ton',
            },
            {
                name: 'USDT (TRC20)',
                address: 'TGFT2Y9cwB5ipbScFmWqmAAwEyLU754PUL',
                badge: { textKey: 'optimal', type: 'success' },
                icon: 'usdt',
            },
        ],
    },
};

export const services = {
    titleKey: 'services-title',
    items: [
        { nameKey: 'service-video-editing', descriptionKey: 'service-video-editing-desc', priceKey: 'price-from-1500' },
        { nameKey: 'service-video-thumbnail', descriptionKey: 'service-video-thumbnail-desc', priceKey: 'price-from-1000' },
        { nameKey: 'service-static-website', descriptionKey: 'service-static-website-desc', priceKey: 'price-from-5000' },
        { nameKey: 'service-offline-app', descriptionKey: 'service-offline-app-desc', priceKey: 'price-from-5000' },
    ]
};
