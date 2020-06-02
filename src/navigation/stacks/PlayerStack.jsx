import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Player from '@app/components/screens/Player'

const PlayerStack = createStackNavigator()

const PlayerStackScreen = () => (
	<PlayerStack.Navigator>
		<PlayerStack.Screen name="Playing now" component={Player} />
	</PlayerStack.Navigator>
)

export default PlayerStackScreen
