const STORAGE_KEY = 'feedback-form-state';

const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const { email, message } = form.elements;

form.addEventListener('input', throttle(onHandlerInputMessage, 500));

function onHandlerInputMessage(evt) {
  const obj = {
    emailUser: email.value,
    userMesg: message.value,
  };

  if (evt.target.name === email) {
    emailUser = evt.target.value;
  }
  if (evt.target.name === message) {
    userMesg = evt.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const localStrg = localStorage.getItem(STORAGE_KEY);

if (localStrg) {
  textContent(JSON.parse(localStrg));
}

function textContent(item) {
  email.value = item.emailUser;
  message.value = item.userMesg;
}

form.addEventListener('submit', onHandlerSubmit);

function onHandlerSubmit(evt) {
  evt.preventDefault();
  const itemLocalStorage = localStorage.getItem(STORAGE_KEY);
  console.log(JSON.parse(itemLocalStorage));
  localStorage.removeItem(STORAGE_KEY);

  form.reset();
}
