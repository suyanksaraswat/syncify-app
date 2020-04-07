import React from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Navigation from './routes/routes';
import theme from './styles';

const App = () => (
  <View>
    <Text
      testID="hello"
    >
      Hello!
    </Text>
  </View>
);

export default App;
