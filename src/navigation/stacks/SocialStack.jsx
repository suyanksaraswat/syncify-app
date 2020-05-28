import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Social from '@app/components/screens/Social'

const SocialStack = createStackNavigator()

const SocialStackScreen = () => (
	<SocialStack.Navigator>
		<SocialStack.Screen name="Social" component={Social} />
	</SocialStack.Navigator>
)

export default SocialStackScreen
