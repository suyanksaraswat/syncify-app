import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import colors from '@app/styles/colors'
import TabBarWithMiniPlayer from './TabBarWithMiniPlayer'
import TabBarIcon from './TabBarIcon'

import PodcastsStackScreen from './stacks/PodcastsStack'
import ExploreStackScreen from './stacks/ExploreStack'
import ProfileStackScreen from './stacks/ProfileStack'

const tabs = {
	PODCASTS: {
		id: 'navigation/podcasts',
		component: PodcastsStackScreen,
		title: 'Podcasts',
		icon: 'playlist-play',
	},
	EXLPORE: {
		id: 'navigation/explore',
		component: ExploreStackScreen,
		title: 'Explore',
		icon: 'magnify',
	},
	PROFILE: {
		id: 'navigation/settings',
		component: ProfileStackScreen,
		title: 'Profile',
		icon: 'account',
	},
}

const Tabs = createBottomTabNavigator()

const TabsScreen = () => (
	<Tabs.Navigator
		tabBar={(props) => <TabBarWithMiniPlayer {...props} />}
		tabBarOptions={{
			activeTintColor: colors.activeBottomNavigatorBarItem,
			inactiveTintColor: colors.inactiveBottomNavigatorBarItem,
		}}
	>
		{Object.values(tabs).map((x) => (
			<Tabs.Screen
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
	</Tabs.Navigator>
)

export default TabsScreen
