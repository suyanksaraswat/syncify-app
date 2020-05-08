import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Podcasts from '@app/components/screens/Podcasts'

const PodcastsStack = createStackNavigator()

const PodcastsStackScreen = () => (
	<PodcastsStack.Navigator>
		<PodcastsStack.Screen name="Podcasts" component={Podcasts} />
	</PodcastsStack.Navigator>
)

export default PodcastsStackScreen
