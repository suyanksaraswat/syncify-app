/* eslint-disable func-names */
import TrackPlayer from 'react-native-track-player';

// Do not modify this function to a arrow function!
// It would break the react-native-track-player on Android

const playerService = async function () {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener('remote-next', () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener('remote-previous', () => {
    TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy();
  });
};

module.exports = playerService;
