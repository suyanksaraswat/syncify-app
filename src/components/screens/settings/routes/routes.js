import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../components/Settings';
import routeNames from './routeNames';

const Stack = createStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routeNames.SETTINGS}
      component={Settings}
    />
  </Stack.Navigator>
);

const Wrapper = (props) => (
  <SettingsStack
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export const StackId = routeNames.SETTINGS;

export default Wrapper;
