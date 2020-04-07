import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Social from '../components/Social';
import routeNames from './routeNames';

const Stack = createStackNavigator();

const SocialStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routeNames.SOCIAL}
      component={Social}
    />
  </Stack.Navigator>
);

const Wrapper = (props) => (
  <SocialStack
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export const StackId = routeNames.SOCIAL;

export default Wrapper;
