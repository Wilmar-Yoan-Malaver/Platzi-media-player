import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';
import AutoPause from './Plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();

const mute = document.querySelector('.buttonMute');
mute.onclick = () => player.toggleMute();
