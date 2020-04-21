import TrackPlayer, { usePlaybackState, State } from 'react-native-track-player';

const DEFAULT_SKIP_SECONDS = 10;

const useButtonsControlls = () => {
  const playbackState = usePlaybackState();

  const isPlaying = playbackState === State.Playing || playbackState === State.Buffering;

  const handlePressPlayPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const onPressForward = async () => {
    const currentPosition = await TrackPlayer.getPosition();

    await TrackPlayer.seekTo(currentPosition + DEFAULT_SKIP_SECONDS);
  };

  return {
    handlePressPlayPause,
    onPressForward,
    isPlaying,
  };
};

export default useButtonsControlls;
