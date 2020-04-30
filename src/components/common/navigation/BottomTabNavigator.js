import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import navigation from '@app/routes/navigation'
import TabBarIcon from '@app/components/common/navigation/TabBarIcon'
import Colors from '@app/styles/colors'

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

const BottomTabNavigator = ({ containerRef, initialNavigationState }) => (
	<NavigationContainer
		ref={containerRef}
		initialState={initialNavigationState}
	>
		<Stack.Navigator>
			<Stack.Screen name="Syncify" component={Navigator} />
		</Stack.Navigator>
	</NavigationContainer>
)

const Navigator = () => (
	<BottomTab.Navigator
		initialRouteName={navigation.initialRoute}
		tabBarOptions={{
			activeTintColor: Colors.activeBottomNavigatorBarItem,
			inactiveTintColor: Colors.inactiveBottomNavigatorBarItem,
		}}
	>
		{navigation.routes.map((x) => (
			<BottomTab.Screen
				key={x.id}
				name={x.id}
				component={x.component}
				options={{
					title: x.title,
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={x.icon} />
					),
				}}
			/>
		))}
	</BottomTab.Navigator>
)

export default BottomTabNavigator
