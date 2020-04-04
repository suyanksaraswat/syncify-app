import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Explore from '../components/Explore';
import routeNames from './routeNames';

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routeNames.EXPLORE} component={Explore} />
    </Stack.Navigator>
  );
};

const Wrapper = (props) => (
  <ExploreStack
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export const StackId = routeNames.EXPLORE;

export default Wrapper;
