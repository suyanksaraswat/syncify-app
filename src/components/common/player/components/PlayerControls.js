import React from 'react';
import { View, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import styled from 'styled-components';
import Button from './Button';

const ButtonsWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const PlayerControls = () => (
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
);

export default PlayerControls;
