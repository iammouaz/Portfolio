const hamburger = document.querySelector('#navToggle');
const close = document.querySelector('#cancel');

let div = document.querySelector('#navToggle');
hamburger.addEventListener("click" , () => {
div.classList.toggle('Hamburger-me');
}
)

