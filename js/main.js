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
    headerCard: 'To Do List',
    textCard: '    To-Do task List project which can add/edit/remove (one or multiple) tasks with browser local storage interaction.',
    badgesCard: ['JavaScript', 'CSS', 'Webpack'],
    imageURL: '../img/todolist.png',
    liveURL: 'https://iammouaz.github.io/To-Do-list',
    projectURL: 'https://github.com/iammouaz/To-Do-list',
  },
  {
    headerCard: 'Math Magicians',
    textCard: 'It is a Single Page App (SPA) that allows users to make simple calculations and to read a random math-related quote',
    badgesCard: ['React', 'Bootstrap', 'CSS'],
    imageURL: '../img/math.png',
    liveURL: 'https://618297ed846a1b00085a858b--elated-mccarthy-57a100.netlify.app/',
    projectURL: 'https://github.com/iammouaz/Math-Magicians',
  },
  {
    headerCard: 'Best TVShows',
    textCard: 'A website that shows information pulled from TVmaze API about some popular TV Shows.',
    badgesCard: ['JavaScript', 'Bootstrap', 'API'],
    imageURL: '../img/TV.png',
    liveURL: 'https://iammouaz.github.io/JavaScript-capstone/',
    projectURL: 'https://github.com/iammouaz/JavaScript-capstone',
  },
  {
    headerCard: 'Leaderboard',
    textCard: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    badgesCard: ['JavaScript', 'CSS', 'API'],
    imageURL: '../img/leader.png',
    liveURL: 'https://iammouaz.github.io/leaderboard/',
    projectURL: 'https://github.com/iammouaz/leaderboard',
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