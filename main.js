const playBtn = document.querySelector('.play-pause');
const repeatBtn = document.querySelector('.repeat');
const volumeControl = document.querySelector('.volume-control');
const volumeButton = document.querySelector('.volume-icon');
const audio = document.querySelector('audio');

const playIcon = `<svg height="24" width="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><path d="m37.324 20.026-22-12.412a4.685 4.685 0 0 0 -4.711.036 4.528 4.528 0 0 0 -2.28 3.938v24.824a4.528 4.528 0 0 0 2.28 3.938 4.687 4.687 0 0 0 4.711.036l22-12.412a4.543 4.543 0 0 0 0-7.948z" /></g></svg>`;
const pauseIcon = `<svg height="20"  width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><rect height="28" rx="3" width="10" x="4" y="2"/><rect height="28" rx="3" width="10" x="18" y="2"/></g></svg>`;
const repeatIcon = `<svg enable-background="new 0 0 32 32" height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m16 2c-2.7 0-5.2.7-7.4 2.2l-1.9-1.9c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v6c0 .6.4 1 1 1h6c.4 0 .8-.2.9-.6.2-.4.1-.8-.2-1.1l-1.2-1.2c1.4-.7 2.9-1.1 4.5-1.1 5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10c0-.3 0-.5 0-.8.1-1.1-.7-2.1-1.8-2.2s-2.1.7-2.2 1.8v1.2c0 7.7 6.3 14 14 14s14-6.3 14-14-6.3-14-14-14z"/><path d="m14 21.2c.4 0 .7-.1 1.1-.3l5.1-3.2c.6-.4.9-1 .9-1.7s-.4-1.3-.9-1.7l-5.1-3.2c-.6-.4-1.4-.4-2-.1-.6.4-1 1-1 1.7v6.4c0 .7.4 1.4 1 1.7.2.3.6.4.9.4z"/></g></svg>`;
const repeatIconBold = `<svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="_39-Replay" data-name="39-Replay"><path d="m16 2a13.9 13.9 0 0 0 -9 3.32v-2.32a1 1 0 0 0 -2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-2.89a11.87 11.87 0 0 1 7.89-3 12 12 0 1 1 -11.67 9.23 1 1 0 1 0 -1.94-.46 13.72 13.72 0 0 0 -.39 3.23 14 14 0 1 0 14-14z"/><path d="m14 21.2a2 2 0 0 0 1.06-.31l5.11-3.19a2 2 0 0 0 0-3.4l-5.11-3.19a2 2 0 0 0 -3.06 1.69v6.4a2 2 0 0 0 2 2zm0-8.4 5.11 3.2-5.11 3.2z"/></g></svg>`;
const muteIcon = `<svg height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg"><g id="_12-Mute" data-name="12-Mute"><path d="m17.5 4a2.53 2.53 0 0 0 -1.5.5l-7.33 5.5h-3.67a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h3.67l7.33 5.5a2.53 2.53 0 0 0 1.5.5 2.5 2.5 0 0 0 2.5-2.5v-19a2.5 2.5 0 0 0 -2.5-2.5z"/><path d="m27.41 16 2.3-2.29a1 1 0 0 0 -1.42-1.42l-2.29 2.3-2.29-2.3a1 1 0 0 0 -1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></svg>`;
const volumeIcon = `<svg height="24" width="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="_11-Volume" data-name="11-Volume"><path d="m17.5 4a2.53 2.53 0 0 0 -1.5.5l-7.33 5.5h-3.67a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h3.67l7.33 5.5a2.53 2.53 0 0 0 1.5.5 2.5 2.5 0 0 0 2.5-2.5v-19a2.5 2.5 0 0 0 -2.5-2.5z"/><path d="m26.78 8.22a1 1 0 1 0 -1.42 1.42 9 9 0 0 1 0 12.72 1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0 11 11 0 0 0 0-15.56z"/><path d="m23.94 11.05a1 1 0 1 0 -1.4 1.42 5 5 0 0 1 0 7.06 1 1 0 0 0 .7 1.71 1 1 0 0 0 .7-.29 7 7 0 0 0 0-9.9z"/></g></svg>`;

let isRepeating = false;
let isMute = false;


playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = pauseIcon;
    } else {
        playBtn.innerHTML = playIcon;
        audio.pause();
    }
});

repeatBtn.addEventListener('click', () => {
    isRepeating = !isRepeating;
    if (isRepeating) {
        audio.loop = true;
        repeatBtn.innerHTML = repeatIcon;
    } else {
        audio.loop = false;
        repeatBtn.innerHTML = repeatIconBold;
    }
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

volumeButton.addEventListener('click', () => {
    isMute = !isMute;
    if (isMute) {
        volumeControl.value = 0;
        audio.volume = 0;
        volumeButton.innerHTML = muteIcon;
    } else {
        volumeControl.value = 0.5; 
        audio.volume = 0.5;
        volumeButton.innerHTML = volumeIcon;
    }
});

audio.addEventListener('ended', () => {
    if(!isRepeating) { 
        playBtn.innerHTML = playIcon;
    }
});