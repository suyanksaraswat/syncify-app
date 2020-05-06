import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from '@app/components/common/BottomTabNavigator'
import Player from '@app/components/screens/Player'
import { connect } from 'react-redux'

import MiniPlayer from '@app/components/common/MiniPlayer/MiniPlayer'

const Stack = createStackNavigator()

const Routes = (props) => (
	<NavigationContainer
		container={props.containerRef}
		initialNavigationState={props.initialNavigationState}
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
		{props.currentTrack && <MiniPlayer />}
	</NavigationContainer>
)

export default connect(
	(state) => ({
		currentTrack: state.player.currentTrack,
	}),
	{}
)(Routes)
