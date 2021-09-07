const hamburger = document.querySelector('#hamburger-img');
const div = document.querySelector('#navToggle');
hamburger.addEventListener('click', () => {
  div.classList.toggle('Hamburger-active');
});

const imgburger = document.querySelector('#cancel');
imgburger.addEventListener('click', () => {
  div.classList.remove('Hamburger-active');
});

const portfolioclose = document.querySelector('#Portfolio-link');
portfolioclose.addEventListener('click', () => {
  div.classList.remove('Hamburger-active');
});

const aboutclose = document.querySelector('#About-link');
aboutclose.addEventListener('click', () => {
  div.classList.remove('Hamburger-active');
});
const contactmeclose = document.querySelector('#contact_me-link');
contactmeclose.addEventListener('click', () => {
  div.classList.remove('Hamburger-active');
});

const projects = [
  {
    headerCard: 'Profesional Art Printing Data More',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './assets/Snapshoot-Portfolio.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/iammouaz',
  },
];
const popup = document.getElementById('popup');
projects.forEach((item) => {
  popup.innerHTML += `
<h2 class="popup-name">
${item.headerCard}
</h2>
<div class="snapshoot"></div>
<p class="p-popup">${item.textCard}
</p>

`;
});
