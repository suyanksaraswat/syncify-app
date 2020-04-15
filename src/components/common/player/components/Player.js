import React from 'react';
import { View, Text, Image } from 'react-native';

import styled from 'styled-components';

import EpisodesImages from './episodes-images/EpisodesImages';
import usePlayer from './usePlayer';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EpisodeCover = styled(Image)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('90%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('90%')}px;
  border-radius: ${({ theme }) => theme.metrics.extraSmallSize}px;
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
        source={{ uri: route.params.episodeSelected.image }}
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
    </Wrapper>
  );
};

export default Player;
