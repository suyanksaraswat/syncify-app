import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import EpisodeList from './components/episode-list/EpisodesList';
import metrics from '../../../styles/metrics';
import PlayerScreen from './components/Player';
import colors from '../../../styles/colors';

const Stack = createStackNavigator();

const DEFAULT_HEADER_OPTIONS = {
  headerTitleStyle: {
    fontSize: metrics.getWidthFromDP('5.5%'),
    fontFamily: 'CircularStd-Bold',
    fontWeight: undefined,
  },
};

const PlayerNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        component={EpisodeList}
        name="EpisodeList"
        options={() => ({
          ...DEFAULT_HEADER_OPTIONS,
          headerTitle: 'Episodes',
        })}
      />
      <Stack.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={() => ({
          ...DEFAULT_HEADER_OPTIONS,
          headerTitle: () => null,
          headerBackTitleVisible: false,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTintColor: colors.text,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default PlayerNavigation;
