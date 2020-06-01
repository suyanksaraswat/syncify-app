import React from 'react'
import { connect } from 'react-redux'
import { selectPodcast } from '@app/modules/podcasts/actions'
import Podcasts from './PodcastsScreen'

const PodcastsContainer = (props) => (
	<Podcasts
		subscriptions={props.subscriptionsList}
		selectPodcast={props.selectPodcast}
		navigation={props.navigation}
	/>
)

export default connect(
	(state) => ({ subscriptionsList: state.podcasts.subscriptions }),
	{ selectPodcast }
)(PodcastsContainer)
