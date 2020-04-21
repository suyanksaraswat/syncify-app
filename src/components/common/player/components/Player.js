import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import EpisodesImages from './episodes-images/EpisodesImages';
import usePlayer from './usePlayer';
import PlayerControls from './player-controls/PlayerControls';
import OptionsBar from './episode-options/OptionsBar';
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
      <EpisodeTitleText>
        {route.params.playlist[indexEpisodeSelected].title}
      </EpisodeTitleText>
      <AuthorText>{route.params.playlist[indexEpisodeSelected].author}</AuthorText>
      <ProgressBar />
      <PlayerControls />
      <OptionsBar />
    </Wrapper>
  );
};

export default Player;
