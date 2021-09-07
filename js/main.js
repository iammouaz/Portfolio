const hamburger = document.querySelector('#hamburger-img');
const div = document.querySelector('#navToggle');
hamburger.addEventListener('click', () => {
  div.classList.toggle('Hamburger-active');
});

const imgburger = document.querySelector('#cancel');
imgburger.addEventListener('click', () => {
  div.classList.remove('Hamburger-active');
});
