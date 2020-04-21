import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styled from 'styled-components';

import ButtonsControlls from './buttons-controlls/ButtonsControlls';
import TextContent from './TextContent';

const Wrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('18%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-vertical: ${({ theme }) => theme.metrics.smallSize}px;
  background-color: ${({ theme }) => theme.colors.bottomNavigatorBar};
`;

const EpisodeImage = styled(Image)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('14%')}px;
  height: 100%;
  border-radius: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

const LeftContentWrapper = styled(TouchableOpacity)`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MiniPlayer = ({ onPressMiniPlayer, currentTrack }) => (
  <Wrapper
    testID="mini-player"
  >
    <LeftContentWrapper
      onPress={onPressMiniPlayer}
    >
      <EpisodeImage
        source={{ uri: currentTrack.artwork }}
      />
      <TextContent
        author={currentTrack.artist}
        title={currentTrack.title}
      />
    </LeftContentWrapper>
    <ButtonsControlls />
  </Wrapper>
);

export default MiniPlayer;
