import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Podcasts from '@app/components/screens/Podcasts'

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => (
	<ExploreStack.Navigator>
		<ExploreStack.Screen name="Explore" component={Podcasts} />
	</ExploreStack.Navigator>
)

export default ExploreStackScreen
