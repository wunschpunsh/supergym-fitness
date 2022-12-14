// Video

const VIDEO_ID = '9TZXsZItgdw';

// // Custom button

const playButton = document.querySelector('.video__play-button');

// Video playback settings

const videoContainer = document.querySelector('.video');
const videoOvelay = videoContainer.querySelector('.video__ovelay');
const videoLink = videoContainer.querySelector('.video__link');

const createVideoPlaybackSetting = () => {
  videoOvelay.style.display = 'none';
  playButton.style.display = 'none';
  videoLink.remove();
};

// Youtube Player

const createIframe = (id, container) => {
  const item = document.createElement('iframe');
  item.setAttribute('title', 'YouTube video player');
  item.setAttribute('allowfullscreen', '');
  item.setAttribute('allow', 'autoplay');
  item.setAttribute('frameborder', '0');
  item.setAttribute(
      'src',
      `https://www.youtube.com/embed/${id}?autoplay=1&enablejsapi=0`
  );
  container.appendChild(item);
};

const createPlayer = () => {
  playButton.addEventListener('click', () => {
    createVideoPlaybackSetting();
    createIframe(VIDEO_ID, videoContainer);
  });
};

export {createPlayer};
