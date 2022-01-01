/* eslint-disable no-unused-vars */
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
const popupwindow = document.querySelector('.trans');
const CloseEl = document.getElementById('closeEl');

const projects = [
  {
    headerCard: 'Weather App',
    textCard: 'App (SPA) to Show Countries Weather for today.',
    badgesCard: ['React', 'Material Ui', 'Goweather API'],
    imageURL: '../Portfolio/img/weather.png',
    liveURL: 'https://boring-swirles-b652cc.netlify.app/',
    projectURL: 'https://github.com/iammouaz/WeatherApp',
  },
  {
    headerCard: 'Book Store',
    textCard: 'Book Store completion tracking website built with React, and Redux. Users can add and delete books to track their reading progress.',
    badgesCard: ['React', 'Redux', 'CSS'],
    imageURL: '../Portfolio/img/bookstore.png',
    liveURL: 'https://vigilant-engelbart-d1b17b.netlify.app/',
    projectURL: 'https://github.com/iammouaz/Book-store',
  },
  {
    headerCard: 'Best TVShows',
    textCard: 'A website that shows information pulled from TVmaze API about some popular TV Shows.',
    badgesCard: ['JavaScript', 'Bootstrap', 'API'],
    imageURL: '../Portfolio/img/TV.png',
    liveURL: 'https://iammouaz.github.io/JavaScript-capstone/',
    projectURL: 'https://github.com/iammouaz/JavaScript-capstone',
  },
  {
    headerCard: 'Cryptos Statistics',
    textCard: 'Web application to show data and prices for top Crypto Currencies.',
    badgesCard: ['React', 'Material Ui', 'API'],
    imageURL: '../Portfolio/img/crypto.png',
    liveURL: 'https://61bf44f23b43f2ee63187cf5--elastic-mestorf-f7a890.netlify.app/',
    projectURL: 'https://github.com/iammouaz/cryptos-statistics',
  },
];

const removeDiv = () => {
  const Popupwin = document.querySelector('.trans ');
  const Popupwin1 = document.querySelector('.popups');
  Popupwin.remove();
  Popupwin1();
};

const CreatePopup = (props) => {
  const CrPopup = document.createElement('div');
  document.body.appendChild(CrPopup);
  CrPopup.classList.add('trans');
  CrPopup.classList.add('popup-active');
  const AddPop = document.createElement('div');
  CrPopup.appendChild(AddPop);
  AddPop.classList.add('popups');
  AddPop.innerHTML += `
  <h2 class="popup-name">${props.headerCard}</h2>
  <div  class="x" id="closeEl" onClick="removeDiv();">+</div>
  <div class="snapshoot"> <img class="snapshoot-img" src="${props.imageURL}" alt="Project"></div>
  <p class="p-popup">${props.textCard}</p>
  <ul class="lang-ul-popup">
  <li class="lang">${props.badgesCard[0]}</li>
  <li class="lang">${props.badgesCard[1]}</li>
  <li class="lang">${props.badgesCard[2]}</li>
  </ul>
  <div class="button-from">
  <form  action="${props.liveURL}" method="get" target="_blank">
           <button class="popup-button" type="submit">See Live</button>
        </form>
   <form action="${props.projectURL}" method="get" target="_blank">
           <button class="popup-button" type="submit">See Source</button>
        </form>
        </div>
  `;
};

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
const nameStore = formStorage.elements.firstname;
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