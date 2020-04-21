import { useState } from 'react';
import { Platform } from 'react-native';
import TrackPlayer, { useTrackPlayerEvents, Event } from 'react-native-track-player';

const events = [Event.PlaybackTrackChanged];

const useBottomTabNavigator = (navigation, state) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackTrackChanged) {
      const currentTrackId = await TrackPlayer.getCurrentTrack();

      const queueCurrentTrack = await TrackPlayer.getTrack(currentTrackId);

      setCurrentTrack(queueCurrentTrack);
    }
  });

  const checkShouldShowTabs = () => {
    const currentTabState = state.routes[state.index].state;

    if (!currentTabState) {
      return true;
    }

    const { routes, index } = currentTabState;

    if (!index && typeof index !== 'number') {
      return false;
    }

    const { name } = routes[index];

    const playerBasePrefixName = 'Player';

    return name.substr(0, playerBasePrefixName.length) !== 'Player';
  };

  const onPressMiniPlayer = async () => {
    const queue = await TrackPlayer.getQueue();

    const currentTrackId = await TrackPlayer.getCurrentTrack();

    const indexEpisodeSelected = queue.findIndex((track) => track.id === currentTrackId);

    navigation.navigate('Player', {
      isOpeningFromMiniPlayer: true,
      indexEpisodeSelected,
      playlist: Platform.select({
        android: queue,
        ios: queue,
      }),
    });
  };

  return {
    shouldShowTabs: checkShouldShowTabs(),
    onPressMiniPlayer,
    currentTrack,
  };
};

export default useBottomTabNavigator;
