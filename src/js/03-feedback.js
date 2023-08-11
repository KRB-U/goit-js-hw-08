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
