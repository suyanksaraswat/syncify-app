import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import styled from 'styled-components';

import EpisodesImages from './episodes-images/EpisodesImages';
import usePlayer from './usePlayer';
import Icon from '../../Icon';

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

const ButtonsWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Touchable = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
      <ButtonsWrapper>
        <Touchable
          onPress={() => TrackPlayer.play()}
        >
          <Icon
            color="black"
            name="play-circle"
            size={70}
          />
        </Touchable>
        <Touchable
          onPress={() => TrackPlayer.pause()}
        >
          <Icon
            color="black"
            name="pause-circle"
            size={70}
          />
        </Touchable>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Player;
