import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TopCharts from '../components/TopCharts';
import routeNames from './routeNames';

const Stack = createStackNavigator();

const TopChartsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routeNames.TOP_CHARTS}
      component={TopCharts}
    />
  </Stack.Navigator>
);

const Wrapper = (props) => (
  <TopChartsStack
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export const StackId = routeNames.TOP_CHARTS;

export default Wrapper;
