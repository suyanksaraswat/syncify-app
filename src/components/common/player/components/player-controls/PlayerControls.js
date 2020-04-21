import React from 'react';

import { View, Text } from 'react-native';
import TrackPlayer, { usePlaybackState, State } from 'react-native-track-player';

import styled from 'styled-components';
import Button from './Button';

const ButtonsWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${({ theme }) => theme.metrics.extraLargeSize}px;
  padding-right: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

const PlayerControls = () => {
  const playbackState = usePlaybackState();
  const [playerState, setPlayerState] = React.useState(
    playbackState === State.Playing || State.Buffering ? 'Playing' : 'Paused',
  );

  const handlePlay = () => {
    if (playerState === 'Paused') {
      TrackPlayer.play();
      setPlayerState('Playing');
    } else if (playerState === 'Playing') {
      TrackPlayer.pause();
      setPlayerState('Paused');
    }
  };

  return (
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
        onPress={handlePlay}
        name={playerState === 'Paused' ? 'play-circle' : 'pause-circle'}
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
  );
};

export default PlayerControls;
