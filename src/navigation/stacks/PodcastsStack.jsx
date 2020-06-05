import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Podcasts from '@app/components/screens/Podcasts'
import EpisodesList from '@app/components/screens/EpisodesList'
import Episode from '@app/components/screens/EpisodeInfo'

const PodcastsStack = createStackNavigator()

const PodcastsStackScreen = () => (
	<PodcastsStack.Navigator initialRouteName="Podcasts">
		<PodcastsStack.Screen name="Podcasts" component={Podcasts} />
		<PodcastsStack.Screen name="Episodes" component={EpisodesList} />
		<PodcastsStack.Screen name="Episode" component={Episode} />
	</PodcastsStack.Navigator>
)

export default PodcastsStackScreen
