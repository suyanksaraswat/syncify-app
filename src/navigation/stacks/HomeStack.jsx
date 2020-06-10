import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@app/components/screens/Home'
import EpisodesList from '@app/components/screens/EpisodesList'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen name="Home" component={Home} />
		<HomeStack.Screen name="Episodes" component={EpisodesList} />
	</HomeStack.Navigator>
)

export default HomeStackScreen
