import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Podcasts from '@app/components/screens/Podcasts'
import EpisodesList from '@app/components/screens/EpisodesList'

const PodcastsStack = createStackNavigator()

const PodcastsStackScreen = () => (
	<PodcastsStack.Navigator initialRouteName="Podcasts">
		<PodcastsStack.Screen name="Podcasts" component={Podcasts} />
		<PodcastsStack.Screen name="Episodes" component={EpisodesList} />
	</PodcastsStack.Navigator>
)

export default PodcastsStackScreen
