import React from 'react'
import { connect } from 'react-redux'
import { selectPodcast, filterData } from '@app/modules/podcasts/actions'
import Podcasts from './PodcastsScreen'

const PodcastsContainer = (props) => (
	<Podcasts
		subscriptions={props.subscriptionsList}
		selectPodcast={props.selectPodcast}
		filterData={props.filterData}
		navigation={props.navigation}
	/>
)

export default connect(
	(state) => ({ subscriptionsList: state.podcasts.subscriptions }),
	{ selectPodcast, filterData }
)(PodcastsContainer)
