import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import TabsScreen from './Tabs'
import AuthStackScreen from './stacks/AuthStack'
import PlayerStackScreen from './stacks/PlayerStack'

const RootStack = createStackNavigator()

const userToken = 'abc'

const Navigation = (props) => (
	<NavigationContainer
		container={props.containerRef}
		initialNavigationState={props.initialNavigationState}
	>
		<RootStack.Navigator headerMode="none">
			{userToken ? (
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
				<RootStack.Screen
					name="Auth"
					component={AuthStackScreen}
					options={{
						animationEnabled: false,
					}}
				/>
			)}
		</RootStack.Navigator>
	</NavigationContainer>
)

export default Navigation
