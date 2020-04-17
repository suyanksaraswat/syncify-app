import React from 'react';
import { View, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import styled from 'styled-components';

import EpisodesImages from './episodes-images/EpisodesImages';
import usePlayer from './usePlayer';
import EpisodeCover from './EpisodeCover';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EpisodeTitleText = styled(Text)`
  font-family: CircularStd-Bold;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6%')}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.metrics.largeSize}px;
`;

const AuthorText = styled(EpisodeTitleText)`
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  margin: ${({ theme }) => theme.metrics.smallSize}px;
`;

const Player = ({ route }) => {
  const { indexEpisodeSelected } = route.params;
  const { playlist } = usePlayer(route);

  return (
    <Wrapper>
      <EpisodesImages
        initialIndex={indexEpisodeSelected}
        playlist={playlist}
      />
      <EpisodeCover
        image={{ uri: route.params.episodeSelected.image }}
      />
      <EpisodeTitleText>
        {' '}
        {route.params.episodeSelected.title}
        {' '}
      </EpisodeTitleText>
      <AuthorText>
        {' '}
        {route.params.episodeSelected.author}
        {' '}
      </AuthorText>
      <ProgressBar />

      <PlayerControls />
    </Wrapper>
  );
};

export default Player;
