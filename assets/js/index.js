import MediaPlayer from './classMain.js'
import AutoPlay from '../plugins/AutoPlay.js';
import AutoPause from '../plugins/AutoPause.js';
import AutoTab from '../plugins/AutoTab.js';
// querySelectors de las etiquetas html
const video = document.querySelector('video');
const button = document.querySelector('button');
const unmute = document.querySelector('#unmute');
const mute = document.querySelector('#mute');
// instancia de la clase MediaPlayer
const player = new MediaPlayer({
    video,
    plugins: [
        // new AutoPlay(),
        // new AutoPause()
        // new AutoTab()
    ]
});



// boton de play y pause usando el metodo de la clase MediaPlayer
button.addEventListener('click', () => {
    player.playAndPause();
});

unmute.addEventListener('click', () => {
    player.unmute();
})

mute.addEventListener('click', () => {
    player.mute();
})

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(e => {
        console.log(e);
    })
}