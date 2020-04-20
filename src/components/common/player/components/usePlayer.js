import { useEffect } from 'react';
import { Platform } from 'react-native';

import TrackPlayer, {
  useTrackPlayerEvents,
  Capability,
  State,
  Event,
} from 'react-native-track-player';

const events = [
  Event.PlaybackQueueEnded,
  Event.PlaybackError,
  Event.RemoteNext,
  Event.RemotePrevious,
];

const usePlayer = (route) => {
  const { indexEpisodeSelected, playlist: playlistParam } = route.params;

  const playlist = Platform.select({
    // for some reason, iOS never play the last track on the queue
    ios: [...playlistParam, playlistParam[playlistParam.length - 1]],
    android: playlistParam,
  });

  const getCurrentQueueTrack = async () => {
    const currentTrackId = await TrackPlayer.getCurrentTrack();

    const queueCurrentTrack = await TrackPlayer.getTrack(currentTrackId);

    return queueCurrentTrack;
  };

  const restartToFirstTrack = async () => {
    await TrackPlayer.skip(playlist[0].id);

    await TrackPlayer.pause();
  };

  const handleOnPlaybackQueueEndedAndroid = async () => {
    const queue = await TrackPlayer.getQueue();

    if (!queue || !queue.length) {
      return;
    }

    const currentTrackId = await TrackPlayer.getCurrentTrack();

    const lastQueueTrack = queue[queue.length - 1];
    const playedLastTrackOnQueue = currentTrackId === lastQueueTrack.id;

    if (playedLastTrackOnQueue) {
      await restartToFirstTrack();
    }
  };

  const onPlaybackQueueEnded = async () => {
    if (Platform.OS === 'android') {
      await handleOnPlaybackQueueEndedAndroid();
    }

    if (Platform.OS === 'ios') {
      await restartToFirstTrack();
    }
  };

  const parseRawEpisodesToTrackableEpisodes = (rawEpisodes) => rawEpisodes.map((rawEpisode) => ({
    duration: rawEpisode.durationInSeconds,
    artwork: rawEpisode.image,
    artist: rawEpisode.author,
    title: rawEpisode.title,
    url: rawEpisode.audio,
    id: rawEpisode.id,
  }));

  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occurred while playing the current track.');
    }

    if (event.type === Event.PlaybackQueueEnded) {
      await onPlaybackQueueEnded();
    }

    if (event.type === Event.RemotePrevious) {
      const currentTrackId = await TrackPlayer.getCurrentTrack();
      const firstTrackQueueId = playlistParam[0].id;

      if (currentTrackId === firstTrackQueueId) {
        await TrackPlayer.pause();

        await TrackPlayer.skip(currentTrackId);

        await TrackPlayer.play();
      }
    }

    if (event.type === Event.RemoteNext) {
      const currentTrackId = await TrackPlayer.getCurrentTrack();
      const lastTrackQueueId = playlistParam[playlistParam.length - 1].id;

      if (currentTrackId === lastTrackQueueId) {
        await restartToFirstTrack();
      }
    }
  });

  const setupInitialPlayerState = async () => {
    await TrackPlayer.setupPlayer({ waitForBuffer: true });

    await TrackPlayer.updateOptions({
      stopWithApp: true,

      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],

      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],

      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });

    await TrackPlayer.add(parseRawEpisodesToTrackableEpisodes(playlist));

    await TrackPlayer.skip(playlist[indexEpisodeSelected].id);

    await TrackPlayer.play();
  };

  const checkIsSamePlaylist = async () => {
    const queue = await TrackPlayer.getQueue();

    if (queue.length !== playlist.length) {
      return false;
    }

    for (let i = 0; i < queue.length; i += 1) {
      if (queue[i].id !== playlist[i].id) {
        return false;
      }
    }

    return true;
  };

  const checkIsTryingToPlaySameTrack = async () => {
    const currentQueueTrack = await getCurrentQueueTrack();

    const isTryingToPlaySameTrack = currentQueueTrack.id === playlist[indexEpisodeSelected].id;

    return isTryingToPlaySameTrack;
  };

  const handleIsPlaying = async () => {
    const isTryingToPlaySameTrack = await checkIsTryingToPlaySameTrack();

    if (isTryingToPlaySameTrack) {
      return;
    }

    await TrackPlayer.skip(playlist[indexEpisodeSelected].id);
  };

  const handleIsPaused = async () => {
    const isTryingToPlaySameTrack = await checkIsTryingToPlaySameTrack();

    if (isTryingToPlaySameTrack) {
      await TrackPlayer.play();
    }

    if (!isTryingToPlaySameTrack) {
      await TrackPlayer.skip(playlist[indexEpisodeSelected].id);

      await TrackPlayer.play();
    }
  };

  const setupPlayer = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Connecting || state === State.None) {
      await setupInitialPlayerState();

      return;
    }

    if (state === State.Playing || state === State.Paused) {
      const isSamePlaylistPlaying = await checkIsSamePlaylist();

      if (!isSamePlaylistPlaying) {
        await setupInitialPlayerState();
      }
    }

    if (state === State.Playing) {
      await handleIsPlaying();
    }

    if (state === State.Paused) {
      await handleIsPaused();
    }
  };

  useEffect(() => {
    setupPlayer();
  }, []);

  return {
    playlist,
  };
};

export default usePlayer;
