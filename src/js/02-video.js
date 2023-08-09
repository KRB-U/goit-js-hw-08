const localStorageKey = 'videoplayer-current-time';

import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const play = new Player(iframe);

play.on('timeupdate', throttle(handlerTimes, 1000));

function handlerTimes(data) {
  let timeSec = data.seconds;
  localStorage.setItem(localStorageKey, timeSec);
  //   console.log(data);
}

const availableTime = localStorage.getItem(localStorageKey);

if (availableTime) {
  play.setCurrentTime(availableTime);
}
