import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '@app/components/screens/Auth/SignIn'
import SignUp from '@app/components/screens/Auth/SignUp'

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name={'SignIn'}
			component={SignIn}
			options={{ title: 'Sign In' }}
		/>
		<AuthStack.Screen
			name={'SignUp'}
			component={SignUp}
			options={{ title: 'Sign Up' }}
		/>
	</AuthStack.Navigator>
)

export default AuthStackScreen
