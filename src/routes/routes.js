import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ExploreStack, {
  StackId as ExploreStackId,
} from '../components/screens/explore/routes/routes';

import PlaylistsStack, {
  StackId as PlaylistsStackId,
} from '../components/screens/playlists/routes/routes';

import SettingsStack, {
  StackId as SettingsStackId,
} from '../components/screens/settings/routes/routes';

import SocialStack, {
  StackId as SocialStackId,
} from '../components/screens/social/routes/routes';

import TopChartsStack, {
  StackId as TopChartsStackId,
} from '../components/screens/top-charts/routes/routes';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name={PlaylistsStackId}
        component={PlaylistsStack}
      />
      <Tab.Screen
        name={TopChartsStackId}
        component={TopChartsStack}
      />
      <Tab.Screen
        name={ExploreStackId}
        component={ExploreStack}
      />
      <Tab.Screen
        name={SocialStackId}
        component={SocialStack}
      />
      <Tab.Screen
        name={SettingsStackId}
        component={SettingsStack}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
