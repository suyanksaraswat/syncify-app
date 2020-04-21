import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useProgress } from 'react-native-track-player';

const TimerContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Time = styled(Text)`
  margin-top: ${({ theme }) => theme.metrics.smallSize}px;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
`;

const ProgressContainer = styled(View)`
  height: 5px;
  width: 90%;
  margin-top: 10px;
  backgroundcolor: #f0f;
  flex-direction: row;
`;

const ProgressPassed = styled(View)`
  backgroundcolor: red;
  flex: ${(props) => props.flex};
`;

const ProgressLeft = styled(View)`
  backgroundcolor: grey;
  flex: ${(props) => props.flex};
`;

const ProgressBar = () => {
  const { position, duration } = useProgress();

  return (
    <View>
      <ProgressContainer>
        <ProgressPassed
          flex={position}
        />
        <ProgressLeft
          flex={duration - position}
        />
      </ProgressContainer>
      <TimerContainer>
        <Time>{new Date(Math.floor(position) * 1000).toISOString().substr(11, 8)}</Time>
        <Time>{new Date(Math.floor(duration) * 1000).toISOString().substr(11, 8)}</Time>
      </TimerContainer>
    </View>
  );
};

export default ProgressBar;
