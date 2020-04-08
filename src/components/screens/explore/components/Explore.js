import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #00f;
`;

const Message = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
  color: ${({ theme }) => theme.colors.text};
`;

const Explore = () => (
  <Wrapper>
    <Message>Explore</Message>
  </Wrapper>
);

export default Explore;
