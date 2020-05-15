/* CONTENT JS */
// Find image container
const imageContainer = document.querySelector('.mainImage');
// Don't run if there is no image container
// if (!imageContainer) return;

// Array of URLs
const portraitUrls = [
    {
        'URL': 'collections/search/portrait/mw57486/Damon-Albarn',
        'icon': 'eye',
        'letter': 'U'
    },
    {
        'URL': 'collections/search/portrait/mw149426/Blur-Alex-James-Dave-Rowntree-Graham-Coxon-Damon-Albarn',
        'icon': 'eye',
        'letter': 'N'
    },
    {
        'URL': 'collections/search/portrait/mw66627/Open-your-mouth-and-shut-your-eyes-Edith-Mary-Liddell-Ina-Liddell-Alice-Liddell',
        'icon': 'eye',
        'letter': '3'
    },
    {
        'URL': 'collections/search/portrait/mw08429/George-Harrison',
        'icon': 'eye',
        'letter': 'R'
    },
    {
        'URL': 'collections/search/portrait/mw00423/William-Beale',
        'icon': 'eye',
        'letter': 'A'
    },
    {
        'URL': 'collections/search/portrait/mw144349/The-Crowned-King-Edward-VII-and-Queen-Alexandra-in-Coronation-Robes-on-their-return-from-Westminster-Abbey-Buckingham-Palace-London',
        'icon': 'eye',
        'letter': 'S'
    },
    {
        'URL': 'collections/search/portrait/mw251928/Isambard-Kingdom-Brunel',
        'icon': 'eye',
        'letter': 'T'
    },
    {
        'URL': 'collections/explore/from-all-angles/npg-d48094-in-360%C2%B0',
        'icon': 'eye',
        'letter': 'O'
    },
    {
        'URL': 'collections/search/portrait/mw280428/Queen-Elizabeth-I',
        'icon': 'eye',
        'letter': 'E'
    },
    {
        'URL': 'collections/search/portrait/mw239065/Shoken-Empress-of-Japan',
        'icon': 'eye',
        'letter': 'Y'
    },
    {
        'URL': 'collections/search/portrait/mw264864/Elisabeth-Welch',
        'icon': 'eye',
        'letter': 'H'
    },
    {
        'URL': 'collections/search/portrait/mw83727/Derek-Jarman',
        'icon': 'eye',
        'letter': 'M'
    },
    {
        'URL': 'collections/search/portrait/mw07599/Vivien-Leigh',
        'icon': 'eye',
        'letter': '<'
    },
]

// Get current URL
const currentUrl = window.location.href;

// Is it in the array?
portraitUrls.forEach(element => {
    if (currentUrl.includes(element.URL) === true) {
        // Make img element with corresponding icon
        const iconEl = document.createElement('img');
        iconEl.src = chrome.extension.getURL(`icons/${element.icon}.svg`);

        // Append the icon to the image container
        imageContainer.appendChild(iconEl);

        // Add CSS
    }
});