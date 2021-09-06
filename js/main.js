const hamburger = document.querySelector('#navToggle');
let close = document.querySelector('#cancel');
let img = document.querySelector('#cancel');
close.addEventListener("click" , () => {
img.classList.remove('Hamburger-me');
}
)

let div = document.querySelector('#navToggle');
hamburger.addEventListener("click" , () => {
div.classList.add('Hamburger-me');
}
)
