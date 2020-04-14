import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

// import Navigation from './routes/routes';
import PlayerNavigation from './components/common/player/PlayerNavigation';
import client from './config/client';
import theme from './styles';

const App = () => (
  <ThemeProvider
    theme={theme}
  >
    <ApolloProvider
      client={client}
    >
      <PlayerNavigation />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
