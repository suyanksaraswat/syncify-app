import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from '../components/utilities/bottom-tab-navigator/BottomTabNavigator';
import Player from '../components/common/player/Player';
import headerOptions from './utils';

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

const Tabs = () => (
  <Tab.Navigator
    tabBar={(props) => (
      <BottomTabNavigator
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    )}
  >
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
);

const RootStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{ animationEnabled: false }}
      // headerMode="none"
      mode="modal"
    >
      <RootStack.Screen
        options={{ headerShown: false }}
        component={Tabs}
        name="Tabs"
      />
      <RootStack.Screen
        options={() => ({
          ...headerOptions.defaultHeaderOptions,
          animationEnabled: true,
        })}
        component={Player}
        name="Player"
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Routes;
