import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles';
import EntryFile from './src';

const App = () => (
  <ThemeProvider theme={theme}>
    <EntryFile />
  </ThemeProvider>
);

export default App;
