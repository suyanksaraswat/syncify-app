import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Playlists from '../components/Playlists';
import routeNames from './routeNames';

const Stack = createStackNavigator();

const PlaylistStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routeNames.PLAYLISTS}
      component={Playlists}
    />
  </Stack.Navigator>
);

const Wrapper = (props) => (
  <PlaylistStack
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export const StackId = routeNames.PLAYLISTS;

export default Wrapper;
