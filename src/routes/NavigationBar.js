import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import navigation from './navigation'
import BottomTabNavigator from '../components/common/navigation/BottomTabNavigator'

const Stack = createStackNavigator()

export default NavigationBar = ({ containerRef, initialNavigationState }) => {
	return (
		<NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Top Charts" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
	)
}
