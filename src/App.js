import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { Text } from 'react-native';
import Navigation from './routes/routes';
import client from './config/client';
import theme from './styles';

const App = () => (
  <ThemeProvider
    theme={theme}
  >
    <ApolloProvider
      client={client}
    >
      <Text
        style={{
          fontFamily: 'CircularStd-Black',
          fontSize: 18,
        }}
      >
        Hello!
      </Text>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
