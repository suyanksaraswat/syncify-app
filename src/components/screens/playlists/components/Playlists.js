import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import EpisodeList from '../../../common/player/components/episode-list/EpisodesList';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Playlists = ({ navigation }) => (
  <Wrapper
    testID="playlists-wrapper"
  >
    <EpisodeList
      navigation={navigation}
    />
  </Wrapper>
);

export default Playlists;
