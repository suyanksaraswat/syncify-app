import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import navigation from '@app/routes/navigation'
import Colors from '@app/styles/colors'
import TabBarIcon from './TabBarIcon'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => (
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
