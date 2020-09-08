import MediaPlayer from './MediaPlayer';
import AutoPlay from './Plugins/AutoPlay';
import AutoPause from './Plugins/AutoPause';
import Ads from './Plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const button: HTMLElement = document.querySelector('button');
button.onclick = () => player.togglePlay();

const mute: HTMLElement = document.querySelector('.buttonMute');
mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log(error.message);
  });
}
