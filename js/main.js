const hamburger = document.querySelector('#hamburger-img');
const mobiletoggle = document.querySelector('#navToggle');
hamburger.addEventListener('click', () => {
  mobiletoggle.classList.toggle('Hamburger-active');
});

const imgburger = document.querySelector('#cancel');
imgburger.addEventListener('click', () => {
  mobiletoggle.classList.remove('Hamburger-active');
});

const portfolioclose = document.querySelector('#Portfolio-link');
portfolioclose.addEventListener('click', () => {
  mobiletoggle.classList.remove('Hamburger-active');
});

const aboutclose = document.querySelector('#About-link');
aboutclose.addEventListener('click', () => {
  mobiletoggle.classList.remove('Hamburger-active');
});
const contactmeclose = document.querySelector('#contact_me-link');
contactmeclose.addEventListener('click', () => {
  mobiletoggle.classList.remove('Hamburger-active');
});

const seeproject = document.querySelector('#see-project');
const seeproject1 = document.querySelector('#see-project1');
const seeproject2 = document.querySelector('#see-project2');
const seeproject3 = document.querySelector('#see-project3');
const popupwindow = document.querySelector('#popup');

seeproject.addEventListener('click', () => {
  popupwindow.classList.add('popup-active');
});

seeproject1.addEventListener('click', () => {
  popupwindow.classList.add('popup-active');
});

seeproject2.addEventListener('click', () => {
  popupwindow.classList.add('popup-active');
});
seeproject3.addEventListener('click', () => {
  popupwindow.classList.add('popup-active');
});

const projects = [
  {
    headerCard: 'Profesional Art Printing Data More',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: '../img/Snapshoot.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/iammouaz',
  },
];
const popup = document.getElementById('popup');
projects.forEach((item) => {
  popup.innerHTML += `

<h2 class="popup-name">${item.headerCard}</h2>
<div class="snapshoot"> <img class="snapshoot-img" src="${item.imageURL}" alt="Project"></div>
<p class="p-popup">${item.textCard}</p>
<ul class="lang-ul-popup">
<li class="lang">${item.badgesCard[0]}</li>
<li class="lang">${item.badgesCard[1]}</li>
<li class="lang">${item.badgesCard[2]}</li>
</ul>
<div class="button-from">
<form  action="${item.liveURL}" method="get" target="_blank">
         <button class="popup-button" type="submit">See Live</button>
      </form>
 <form action="${item.projectURL}" method="get" target="_blank">
         <button class="popup-button" type="submit">See Source</button>
      </form>
      </div>
`;
});

const form = document.getElementById('contact_me');
const formEmail = document.getElementById('email');
const ErrorMsg = document.getElementById('error');

function IsItLowercase(str) {
  return str === str.toLowerCase();
}

form.addEventListener('submit', (event) => {
  if (!IsItLowercase(formEmail.value)) {
    ErrorMsg.innerHTML = 'The Email Address has to be Lower Case';
    formEmail.classList.add('email-error');
    event.preventDefault();
  } else {
    ErrorMsg.innerHTML = '';
  }
});

const formStorage = document.getElementById('contact_me');
const nameStore = formStorage.elements.name;
const emailStore = formStorage.elements.email;
const messageStore = formStorage.elements.message;

function dataStorage() {
  const formData = {

    name: nameStore.value,
    email: emailStore.value,
    message: messageStore.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

nameStore.onchange = dataStorage;
emailStore.onchange = dataStorage;
messageStore.onchange = dataStorage;

const storeData = JSON.parse(localStorage.getItem('formData'));

nameStore.value = storeData.name;
emailStore.value = storeData.email;
messageStore.value = storeData.message;