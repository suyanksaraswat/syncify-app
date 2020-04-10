import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import Icon from '../Icon';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const PlayerText = styled(Text)`
  font-family: CircularStd-Black;
  font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

const PlayIcon = styled(Icon).attrs(({ theme }) => ({
  name: 'play',
  size: theme.metrics.getWidthFromDP('10%'),
  color: theme.colors.text,
}))``;

const Player = () => (
  <Wrapper
    testID="player"
  >
    <PlayerText>Player</PlayerText>
    <PlayIcon />
  </Wrapper>
);

export default Player;
