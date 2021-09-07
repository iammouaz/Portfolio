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
