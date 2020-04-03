import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const WelcomeMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
`;

const EntryFile = () => (
  <Wrapper>
    <WelcomeMessage>UHUL! Syncify app is up and running!</WelcomeMessage>
  </Wrapper>
);

export default EntryFile;
