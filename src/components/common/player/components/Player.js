import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import EpisodesImages from './episodes-images/EpisodesImages';
import usePlayer from './usePlayer';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Player = ({ route }) => {
  const { indexEpisodeSelected } = route.params;
  const { playlist } = usePlayer(route);

  return (
    <Wrapper>
      <EpisodesImages
        initialIndex={indexEpisodeSelected}
        playlist={playlist}
      />
    </Wrapper>
  );
};

export default Player;
