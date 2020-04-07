import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navigation from './routes/routes';
import theme from './styles';

const App = () => (
  <ThemeProvider
    theme={theme}
  >
    <Navigation />
  </ThemeProvider>
);

export default App;
