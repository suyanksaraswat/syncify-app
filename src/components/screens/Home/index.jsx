import React from 'react'
import { connect } from 'react-redux'
import { selectPodcast, searchPodcasts } from '@app/modules/podcasts/actions'
import HomeScreen from './HomeScreen'

const Home = (props) => (
	<HomeScreen
		selectPodcast={props.selectPodcast}
		navigation={props.navigation}
	/>
)

export default connect(
	(state) => ({ subscriptionsList: state.podcasts.subscriptions }),
	{ selectPodcast, searchPodcasts }
)(Home)
