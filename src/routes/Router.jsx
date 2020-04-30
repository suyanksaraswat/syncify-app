import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from '@app/components/common/BottomTabNavigator'
import Player from '@app/components/screens/Player'

const Stack = createStackNavigator()

const Routes = ({ containerRef, initialNavigationState }) => (
	<NavigationContainer
		container={containerRef}
		initialNavigationState={initialNavigationState}
	>
		<Stack.Navigator
			screenOptions={{ animationEnabled: false }}
			mode="modal"
		>
			<Stack.Screen name="Syncify" component={BottomTabNavigator} />

			<Stack.Screen
				options={() => ({ animationEnabled: true })}
				component={Player}
				name="Player"
			/>
		</Stack.Navigator>
	</NavigationContainer>
)

export default Routes
