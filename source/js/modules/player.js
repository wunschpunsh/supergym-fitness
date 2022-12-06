/* global YT */

// Load YouTube API

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];

const renderApi = () => {
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

// Video

const VIDEO_ID = '9TZXsZItgdw';

// Custom button

const playButton = document.querySelector('.video__play-button');

// Video playback settings

const videoContainer = document.querySelector('.video');
const poster = videoContainer.querySelector('img');
const videoOvelay = videoContainer.querySelector('.video__ovelay');

const createVideoPlaybackSetting = () => {
  poster.style.display = 'none';
  videoOvelay.style.display = 'none';
  playButton.style.display = 'none';
};

// Create IFRAME and Youtube Player

let player;
window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: VIDEO_ID,
    playerVars: {
      controls: 2,
      modestbranding: 1,
      origin: 'http://localhost:3000/',
      rel: 0,
    },
    events: {
      // onReady: onPlayerReady,
      // 'onStateChange': onPlayerStateChange,
    },
  });
};

playButton.addEventListener('click', () => {
  createVideoPlaybackSetting();
  player.playVideo();
});

// const onPlayerReady = (event) => {
//   event.target.playVideo();
// };

// const onPlayerError = (event) => {
//   console.log(event.data);
// };

// console.log(player.getPlaylist());

export {renderApi};
