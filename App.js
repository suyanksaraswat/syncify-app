import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navigation from './src/routes/routes';
import theme from './src/styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
);

export default App;
