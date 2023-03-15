import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}, 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');
const timeStop = saveTime ? JSON.parse(saveTime) : 0.01;

player.setCurrentTime(timeStop.seconds || 0);






