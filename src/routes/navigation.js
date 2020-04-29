import PodcastsScreen from '@app/components/screens/Podcasts'
import ExploreScreen from '@app/components/screens/Explore'
import SettingsScreen from '@app/components/screens/Settings'
import TopChartsScreen from '@app/components/screens/TopCharts'
import SocialScreen from '@app/components/screens/Social'

const routes = {
	PODCASTS: {
		id: 'navigation/podcasts',
		component: PodcastsScreen,
		title: 'Podcasts',
		icon: 'playlist-play',
	},
	EXLPORE: {
		id: 'navigation/explore',
		component: ExploreScreen,
		title: 'Explore',
		icon: 'magnify',
	},
	SETTINGS: {
		id: 'navigation/settings',
		component: SettingsScreen,
		title: 'Settings',
		icon: 'settings',
	},
	TOPCHARTS: {
		id: 'navigation/top-charts',
		component: TopChartsScreen,
		title: 'Top Charts',
		icon: 'star',
	},
	SOCIAL: {
		id: 'navigation/social',
		component: SocialScreen,
		title: 'Social',
		icon: 'account-group',
	},
}

const navigation = {
	...routes,
	initialRoute: routes.PODCASTS.id,
	routes: Object.values(routes),
}

export default navigation
