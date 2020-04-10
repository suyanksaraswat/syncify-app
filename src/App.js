import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

// import Navigation from './routes/routes';
import Player from './components/common/player/Player';
import client from './config/client';
import theme from './styles';

const App = () => (
  <ThemeProvider
    theme={theme}
  >
    <ApolloProvider
      client={client}
    >
      <Player />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
