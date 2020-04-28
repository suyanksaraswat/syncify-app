import PodcastsScreen from '../components/screens/Podcasts'
import ExploreScreen from '../components/screens/Explore'
import SettingsScreen from '../components/screens/Settings'
import TopChartsScreen from '../components/screens/TopCharts'
import SocialScreen from '../components/screens/Social'

const navigation = {
	PODCASTS: {
		id: 'navigation/podcasts',
		component: PodcastsScreen,
		icon: 'playlist-play',
	},
	EXLPORE: {
		id: 'navigation/explore',
		component: ExploreScreen,
		icon: 'magnify',
	},
	SETTINGS: {
		id: 'navigation/settings',
		component: SettingsScreen,
		icon: 'settings',
	},
	TOPCHARTS: {
		id: 'navigation/top-charts',
		component: TopChartsScreen,
		icon: 'start',
	},
	SOCIAL: {
		id: 'navigation/social',
		component: SocialScreen,
		icon: 'account-group',
	},
}

navigation.initialRoute = navigation.PODCASTS.id

export default navigation
