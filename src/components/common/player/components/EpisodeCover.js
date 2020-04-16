import React from 'react';
import { View, Image } from 'react-native';

import styled from 'styled-components';

const EpisodeCoverImage = styled(Image)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('90%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('90%')}px;
  border-radius: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

const EpisodeCover = ({ image }) => (
  <EpisodeCoverImage
    source={image}
  />
);

export default EpisodeCover;
