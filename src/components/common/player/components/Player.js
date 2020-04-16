import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import EpisodeImage from './EpisodeImage';
import usePlayer from './usePlayer';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.metrics.largeSize}px;
  background-color: white;
`;

const Player = ({ route }) => {
  const { image } = usePlayer(route);

  return (
    <Wrapper>
      {image && (
      <EpisodeImage
        image={image}
      />
      )}
    </Wrapper>
  );
};

export default Player;
