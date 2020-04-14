import { useEffect, useState } from 'react';

import TrackPlayer, {
  useTrackPlayerEvents,
  usePlaybackState,
  Capability,
  State,
  Event,
} from 'react-native-track-player';

const events = [Event.PlaybackTrackChanged, Event.PlaybackState, Event.PlaybackError];

const usePlayer = (route) => {
  const { episodeSelected, playlist } = route.params;
  const pbs = usePlaybackState();

  const [playbackState, setPlaybackState] = useState(episodeSelected);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  useTrackPlayerEvents(events, (event) => {
    console.log('pbs: ', pbs);
    if (event.type === Event.PlaybackError) {
      console.warn('An error occurred while playing the current track.');
    }

    if (event.type === Event.PlaybackState) {
      setPlaybackState(playbackState);
    }

    if (event.type === Event.PlaybackTrackChanged) {
      // console.log('# 34 - ', event);
    }
  });

  const parseRawEpisodesToTrackableEpisodes = (rawEpisodes) => rawEpisodes.map((rawEpisode) => ({
    duration: rawEpisode.durationInSeconds,
    artwork: rawEpisode.image,
    artist: rawEpisode.author,
    title: rawEpisode.title,
    url: rawEpisode.audio,
    id: rawEpisode.id,
  }));

  const setupInitialPlayerState = async () => {
    await TrackPlayer.setupPlayer({ waitForBuffer: true });

    await TrackPlayer.updateOptions({
      stopWithApp: true,

      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],

      compactCapabilities: [Capability.Play, Capability.Pause],
    });

    await TrackPlayer.add(
      parseRawEpisodesToTrackableEpisodes([episodeSelected, ...playlist]),
    );

    await TrackPlayer.play();
  };

  const setupPlayer = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Playing) {
      // return;
    }

    await setupInitialPlayerState();
  };

  useEffect(() => {
    setupPlayer();
  }, []);
};

export default usePlayer;
