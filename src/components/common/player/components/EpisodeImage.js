import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('75%')}px;
  align-items: center;
`;

const ImageComponent = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.metrics.smallSize}px;
`;

const EpisodeImage = ({ image }) => (
  <Wrapper>
    <ImageComponent
      source={{ uri: image }}
    />
  </Wrapper>
);

export default EpisodeImage;
