import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Explore from '@app/components/screens/Explore'

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => (
	<ExploreStack.Navigator>
		<ExploreStack.Screen name="Explore" component={Explore} />
	</ExploreStack.Navigator>
)

export default ExploreStackScreen
