import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components';
import usePlayer from './usePlayer';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Player = ({ route }) => {
  usePlayer(route);

  return <Wrapper />;
};

export default Player;
