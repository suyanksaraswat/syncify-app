import React from 'react';
import { View, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import styled from 'styled-components';

import EpisodesImages from './episodes-images/EpisodesImages';
import usePlayer from './usePlayer';
import EpisodeCover from './EpisodeCover';
import Button from './Button';
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

const ButtonsWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
      <ButtonsWrapper>
        <Button
          onPress={() => console.log('Speed up pressed')}
          name="speedometer"
          size={35}
        />
        <Button
          onPress={() => console.log('Rewind back pressed')}
          name="skip-previous-circle"
          size={55}
        />
        <Button
          onPress={() => TrackPlayer.play()}
          name="play-circle"
          size={70}
        />
        <Button
          onPress={() => TrackPlayer.pause()}
          name="pause-circle"
          size={70}
        />
        <Button
          onPress={() => console.log('Skip button pressed')}
          name="skip-next-circle"
          size={55}
        />
        <Button
          onPress={() => console.log('Like is pressed')}
          name="heart-outline"
          size={35}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};

// speedometer
// surround-sound-2-0

export default Player;
