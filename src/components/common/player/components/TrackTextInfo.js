import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import useCurrentTrackPlaying from './useCurrentTrackPlaying';

const Wrapper = styled(View)`
  width: 100%;
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

const TrackTextInfo = () => {
  const { currentTrack } = useCurrentTrackPlaying();

  return (
    currentTrack && (
      <Wrapper>
        <EpisodeTitleText>{currentTrack.title}</EpisodeTitleText>
        <AuthorText>{currentTrack.artist}</AuthorText>
      </Wrapper>
    )
  );
};

export default TrackTextInfo;
