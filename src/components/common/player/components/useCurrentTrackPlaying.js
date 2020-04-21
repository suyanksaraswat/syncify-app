import { useState } from 'react';
import TrackPlayer, { useTrackPlayerEvents, Event } from 'react-native-track-player';

const events = [Event.PlaybackTrackChanged];

const useCurrentTrackPlaying = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackTrackChanged) {
      const currentTrackId = await TrackPlayer.getCurrentTrack();
      const queue = await TrackPlayer.getQueue();

      const queueCurrentTrack = queue.find(
        (queueTrack) => queueTrack.id === currentTrackId,
      );

      setCurrentTrack(queueCurrentTrack);
    }
  });

  return {
    currentTrack,
  };
};

export default useCurrentTrackPlaying;
