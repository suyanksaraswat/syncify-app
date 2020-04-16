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

const ProgressBar = () => {
  const { position, duration } = useProgress();

  return (
    <View>
      <View
        style={{
          height: 5,
          width: '90%',
          marginTop: 10,
          backgroundColor: '#f0f',
          flexDirection: 'row',
        }}
      >
        <View
          style={{ flex: position, backgroundColor: 'red' }}
        />
        <View
          style={{
            flex: duration - position,
            backgroundColor: 'grey',
          }}
        />
      </View>
      <TimerContainer>
        <Time>{new Date(Math.floor(position) * 1000).toISOString().substr(11, 8)}</Time>
        <Time>
          {' '}
          {new Date(Math.floor(duration) * 1000).toISOString().substr(11, 8)}
        </Time>
      </TimerContainer>
    </View>
  );
};

export default ProgressBar;
