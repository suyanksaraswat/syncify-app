import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

import EpisodesImages from './components/episodes-images/EpisodesImages';
import PlayerControls from './components/player-controls/PlayerControls';
import OptionsBar from './components/episode-options/OptionsBar';
import TrackTextInfo from './components/TrackTextInfo';
import ProgressBar from './components/ProgressBar';
import usePlayer from './usePlayer';
import Icon from '../Icon';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: white;
`;

const HeaderLeftButtonIcon = styled(Icon).attrs(({ theme }) => ({
  size: theme.metrics.getWidthFromDP('10%'),
  color: theme.colors.text,
  name: 'chevron-down',
}))``;

const HeaderRightButtonIcon = styled(Icon).attrs(({ theme }) => ({
  size: theme.metrics.getWidthFromDP('8%'),
  color: theme.colors.text,
  name: 'playlist-play',
}))`
  padding-right: ${({ theme }) => theme.metrics.mediumSize}px;
`;

const HeaderButton = styled(TouchableOpacity).attrs(({ theme }) => ({
  hitSlop: {
    top: theme.metrics.mediumSize,
    left: theme.metrics.mediumSize,
    down: theme.metrics.mediumSize,
    right: theme.metrics.mediumSize,
  },
}))`
  margin-right: ${({ withMarginRight, theme }) => (withMarginRight ? theme.metrics.mediumSize : 0)}px;
`;

const Player = ({ navigation, route }) => {
  const { isOpeningFromMiniPlayer, indexEpisodeSelected, playlist } = usePlayer(route);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton
          onPress={() => navigation.pop()}
        >
          <HeaderLeftButtonIcon />
        </HeaderButton>
      ),
      headerRight: () => (
        <HeaderButton
          onPress={() => console.warn('Show queue')}
          withMarginRight
        >
          <HeaderRightButtonIcon />
        </HeaderButton>
      ),
    });
  }, []);

  return (
    <Wrapper>
      <EpisodesImages
        isOpeningFromMiniPlayer={isOpeningFromMiniPlayer}
        initialIndex={indexEpisodeSelected}
        playlist={playlist}
      />
      <ProgressBar />
      <TrackTextInfo />
      <PlayerControls />
      <OptionsBar />
    </Wrapper>
  );
};

export default Player;
