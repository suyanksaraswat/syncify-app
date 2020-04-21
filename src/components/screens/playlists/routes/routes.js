import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import headerOptions from '../../../../routes/utils';
import EpisodeList from '../components/Playlists';
import routeNames from './routeNames';

const Stack = createStackNavigator();

const PlaylistStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={EpisodeList}
      name={routeNames.EPISODES_LIST}
      options={() => ({
        ...headerOptions.defaultHeaderOptions,
        headerTitle: 'Episodes',
      })}
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
