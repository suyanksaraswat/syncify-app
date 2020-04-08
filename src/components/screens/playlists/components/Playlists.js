import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import Icon from '../../../common/Icon';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0f;
`;

const Message = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
  color: ${({ theme }) => theme.colors.text};
`;

const Playlists = () => (
  <Wrapper
    testID="playlists-wrapper"
  >
    <Message>Playlists</Message>
    <Icon
      color="#f00"
      name="magnify"
      size={40}
    />
  </Wrapper>
);

export default Playlists;
