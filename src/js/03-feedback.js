const STORAGE_KEY = 'feedback-form-state';

// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const { email, message } = form.elements;

form.addEventListener('input', throttle(onHandlerInputMessage, 500));

function onHandlerInputMessage(evt) {
  const obj = {
    email: email.value,
    message: message.value,
  };

  if (evt.target.name === email) {
    email = evt.target.value;
  }
  if (evt.target.name === message) {
    message = evt.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const localStrg = localStorage.getItem(STORAGE_KEY);

if (localStrg) {
  textContent(JSON.parse(localStrg));
}

function textContent(item) {
  email.value = item.email;
  message.value = item.message;
}

form.addEventListener('submit', onHandlerSubmit);

function onHandlerSubmit(evt) {
  if (email.value === '' || message.value === '') {
    alert('Заповни усі поля');
    return;
  }

  evt.preventDefault();
  const itemLocalStorage = localStorage.getItem(STORAGE_KEY);
  console.log(JSON.parse(itemLocalStorage));
  localStorage.removeItem(STORAGE_KEY);

  evt.currentTarget.reset();
}

//==================
// const form = document.querySelector('.feedback-form');
// const KEY_LS = 'feedback-form-state';

// form.addEventListener('input', handlerInput);
// form.addEventListener('submit', handlerSubmit);

// let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
// const { email, message } = form.elements;

// email.value = data.email ?? '';
// message.value = data.message ?? '';

// function handlerInput(evt) {
//   data[evt.target.name] = evt.target.value;
//   localStorage.setItem(KEY_LS, JSON.stringify(data));
// }

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   console.log(data);

//   form.reset();
//   data = {};
//   localStorage.removeItem(KEY_LS);
// }
