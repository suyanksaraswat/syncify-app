import React from 'react'
import { AsyncStorage } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'

import TabsScreen from './Tabs'
import AuthStackScreen from './stacks/AuthStack'
import PlayerStackScreen from './stacks/PlayerStack'

const RootStack = createStackNavigator()

const Navigation = (props) => {
	const [token, setToken] = React.useState(null)
	const [expiryTime, setExpiryTime] = React.useState(null)
	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			try {
				setToken(await AsyncStorage.getItem('token'))
				setExpiryTime(
					new Date(
						JSON.parse(await AsyncStorage.getItem('expiryTime'))
					)
				)
			} catch (e) {
				// Restoring token failed
			}
		}
		bootstrapAsync()
	}, [props.userToken])
	return (
		<NavigationContainer
			container={props.containerRef}
			initialNavigationState={props.initialNavigationState}
		>
			<RootStack.Navigator headerMode="none">
				{token && expiryTime && expiryTime > Date.now() ? (
					<>
						<RootStack.Screen
							name="Syncify"
							component={TabsScreen}
							options={{
								animationEnabled: false,
							}}
						/>

						<RootStack.Screen
							name="Player"
							component={PlayerStackScreen}
							options={{ animationEnabled: true }}
						/>
					</>
				) : (
					<>
						<RootStack.Screen
							name="Auth"
							component={AuthStackScreen}
							options={{
								animationEnabled: false,
							}}
						/>
					</>
				)}
			</RootStack.Navigator>
		</NavigationContainer>
	)
}

export default connect(
	(state) => ({
		userToken: state.auth.idToken,
	}),
	{}
)(Navigation)
