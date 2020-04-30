import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import tabs from '@app/routes/tabs'
import Colors from '@app/styles/colors'
import TabBarIcon from './TabBarIcon'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => (
	<BottomTab.Navigator
		initialRouteName={tabs.initialRoute}
		tabBarOptions={{
			activeTintColor: Colors.activeBottomNavigatorBarItem,
			inactiveTintColor: Colors.inactiveBottomNavigatorBarItem,
		}}
	>
		{tabs.routes.map((x) => (
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
