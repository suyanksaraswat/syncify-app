import {
  useCallback, useState, useMemo, useRef,
} from 'react';
import { Platform } from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  usePlaybackState,
  Event,
  State,
} from 'react-native-track-player';

import metrics from '../../../../../styles/metrics';

const events = [Event.PlaybackTrackChanged, Event.RemotePrevious, Event.RemoteNext];

const useEpisodesImages = (isOpeningFromMiniPlayer, playlist, initialIndex) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(initialIndex);

  const episodeImagesListRef = useRef(null);
  const isFirstRender = useRef(true);

  const playbackState = usePlaybackState();

  const extractPlaylistImagesWithIds = useCallback(
    (playlistItems) => playlistItems.map(({ image, id }) => ({ image, id })),
    [],
  );

  const playlistImages = useMemo(
    () => Platform.select({
      ios: extractPlaylistImagesWithIds(
        isOpeningFromMiniPlayer ? playlist : playlist.slice(0, playlist.length - 1),
      ),
      android: extractPlaylistImagesWithIds(playlist),
    }),
    [playlist],
  );

  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.RemoteNext && currentTrackIndex + 1 < playlist.length) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }

    if (event.type === Event.RemotePrevious && currentTrackIndex - 1 >= 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }

    if (
      (isOpeningFromMiniPlayer || !isFirstRender.current)
      && event.type === Event.PlaybackTrackChanged
    ) {
      const currentTrackId = await TrackPlayer.getCurrentTrack();

      const nextTrackIndex = playlist.findIndex(
        (playlistItem) => playlistItem.id === currentTrackId,
      );

      setCurrentTrackIndex(nextTrackIndex);

      episodeImagesListRef.current.scrollToIndex({
        index: nextTrackIndex,
        animated: true,
      });
    }

    isFirstRender.current = false;
  });

  const getCurrentPageIndex = (contentOffset) => {
    const isHorizontalSwipeMovement = contentOffset.x > 0;

    const currentPageIndex = isHorizontalSwipeMovement
      ? Math.ceil(contentOffset.x / metrics.width)
      : 0;

    return currentPageIndex;
  };

  const checkIsSwipingLeftFirstTrack = (currentPageIndex, contentOffset) => {
    const isSwipingLeftFirstTrack = playlist[currentTrackIndex].id === playlist[0].id
      && currentPageIndex === 0
      && contentOffset.x === 0;

    return isSwipingLeftFirstTrack;
  };

  const checkIsSwipingRightLastTrack = (currentPageIndex, contentOffset) => {
    const lastPlaylistIndex = playlist.length - 1;

    const isSwipingRightLastTrack = currentTrackIndex === lastPlaylistIndex
      && currentPageIndex === lastPlaylistIndex
      && contentOffset.x === metrics.width * lastPlaylistIndex;

    return isSwipingRightLastTrack;
  };

  const onSwipeListItem = async (index) => {
    await TrackPlayer.skip(playlist[index].id);

    if (playbackState === State.Ready) {
      await TrackPlayer.play();
    }

    episodeImagesListRef.current.scrollToIndex({
      animated: true,
      index,
    });
  };

  const onEpisodesImagesMomentumScrollEnd = async (event) => {
    const { contentOffset } = event.nativeEvent;

    const currentPageIndex = getCurrentPageIndex(contentOffset);

    const isSwipingLeftFirstTrack = checkIsSwipingLeftFirstTrack(
      currentPageIndex,
      contentOffset,
    );
    const isSwipingRightLastTrack = checkIsSwipingRightLastTrack(
      currentPageIndex,
      contentOffset,
    );

    if (isSwipingLeftFirstTrack || isSwipingRightLastTrack) {
      return;
    }

    const isSwipedHorizontally = contentOffset.x === metrics.width * currentPageIndex;
    const isSwipeCompleted = currentPageIndex !== currentTrackIndex;

    if (isSwipedHorizontally && isSwipeCompleted) {
      await onSwipeListItem(currentPageIndex);
    }
  };

  return {
    onEpisodesImagesMomentumScrollEnd,
    episodeImagesListRef,
    playlistImages,
  };
};

export default useEpisodesImages;
