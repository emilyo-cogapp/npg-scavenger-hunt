// content.js
const imageContainer = document.querySelector('.mainImage');
const eyeIcon = document.createElement('img');
eyeIcon.src = chrome.extension.getURL("icons/witness.svg");

console.log('image container', imageContainer);

imageContainer.appendChild(eyeIcon);