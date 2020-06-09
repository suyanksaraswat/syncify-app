import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@app/components/screens/Home'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen name="Home" component={Home} />
	</HomeStack.Navigator>
)

export default HomeStackScreen
