import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'

import TabsScreen from './Tabs'
import AuthStackScreen from './stacks/AuthStack'
import PlayerStackScreen from './stacks/PlayerStack'
import StorybookUIRoot from '../../storybook'

const RootStack = createStackNavigator()

const Navigation = (props) => (
	<NavigationContainer
		container={props.containerRef}
		initialNavigationState={props.initialNavigationState}
	>
		<RootStack.Navigator headerMode="none">
			{props.userToken ? (
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
