import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Podcasts from '@app/components/screens/Podcasts'
import EpisodesList from '@app/components/screens/EpisodesList'
import Episode from '@app/components/screens/EpisodeInfo'

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => (
	<ExploreStack.Navigator>
		<ExploreStack.Screen name="Explore" component={Podcasts} />
		<ExploreStack.Screen name="Episodes" component={EpisodesList} />
		<ExploreStack.Screen name="Episode" component={Episode} />
	</ExploreStack.Navigator>
)

export default ExploreStackScreen
