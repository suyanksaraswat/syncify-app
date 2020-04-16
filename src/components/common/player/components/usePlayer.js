import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import TrackPlayer, {
  useTrackPlayerEvents,
  Capability,
  State,
  Event,
} from 'react-native-track-player';

const events = [
  Event.PlaybackTrackChanged,
  Event.PlaybackQueueEnded,
  Event.PlaybackState,
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

  const [currentTrack, setCurrentAudioTrack] = useState(null);

  const getCurrentQueueTrack = async () => {
    const currentTrackId = await TrackPlayer.getCurrentTrack();

    const queueCurrentTrack = await TrackPlayer.getTrack(currentTrackId);

    return queueCurrentTrack;
  };

  const restartToFirstTrack = async () => {
    await TrackPlayer.skip(playlist[0].id);

    await TrackPlayer.stop();
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

  const handleOnPlaybackQueueEndedIos = async () => {
    await TrackPlayer.skip(playlist[0].id);

    const firstPlaylistTrack = await TrackPlayer.getTrack(playlist[0].id);

    setCurrentAudioTrack(firstPlaylistTrack);
  };

  const onPlaybackQueueEnded = async () => {
    if (Platform.OS === 'android') {
      await handleOnPlaybackQueueEndedAndroid();
    }

    if (Platform.OS === 'ios') {
      await handleOnPlaybackQueueEndedIos();
    }
  };

  useTrackPlayerEvents(events, async (event) => {
    console.log('event: ', event);
    const isBuffering = event.type === Event.PlaybackState && event.state === State.Buffering;
    const isPlaybackTrackChangedEvent = event.type === Event.PlaybackTrackChanged;

    if (isPlaybackTrackChangedEvent || isBuffering) {
      const queueCurrentTrack = await getCurrentQueueTrack();

      if (!currentTrack || currentTrack.id !== queueCurrentTrack.id) {
        setCurrentAudioTrack(queueCurrentTrack);
      }
    }

    if (event.type === Event.PlaybackError) {
      console.warn('An error occurred while playing the current track.');
    }

    if (event.type === Event.PlaybackQueueEnded) {
      await onPlaybackQueueEnded();
    }

    if (event.type === Event.RemotePrevious) {
      const currentTrackId = await TrackPlayer.getCurrentTrack();

      if (currentTrackId === playlistParam[0].id) {
        await TrackPlayer.skip(currentTrackId);

        await TrackPlayer.play();
      }
    }

    if (event.type === Event.RemoteNext) {
      await restartToFirstTrack();
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

  const handleIsPlaying = async () => {
    const queueCurrentTrack = await getCurrentQueueTrack();

    const isTryingToPlaySameAudio = queueCurrentTrack.id === playlist[indexEpisodeSelected].id;
    const isSamePlaylistPlaying = await checkIsSamePlaylist();

    if (isTryingToPlaySameAudio && isSamePlaylistPlaying) {
      setCurrentAudioTrack(queueCurrentTrack);

      return;
    }

    const isPlayingSameAudioDifferentPlaylist = isTryingToPlaySameAudio && !isSamePlaylistPlaying;
    const isNotPlayingSameAudioSamePlaylist = !isTryingToPlaySameAudio && !isSamePlaylistPlaying;

    if (isNotPlayingSameAudioSamePlaylist || isPlayingSameAudioDifferentPlaylist) {
      await setupInitialPlayerState();

      return;
    }

    if (!isTryingToPlaySameAudio && isSamePlaylistPlaying) {
      await TrackPlayer.skip(playlist[indexEpisodeSelected].id);
    }
  };

  const setupPlayer = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Connecting || state === State.None) {
      await setupInitialPlayerState();

      return;
    }

    if (state === State.Playing) {
      await handleIsPlaying();
    }
  };

  useEffect(() => {
    setupPlayer();
  }, []);

  return {
    image: currentTrack && currentTrack.artwork,
  };
};

export default usePlayer;

// no último e no primeiro áudio quando passa ou volta
