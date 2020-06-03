import React from 'react'
import { connect } from 'react-redux'
import { startPlayback } from '@app/modules/player/actions'
import Episode from './EpisodeScreen'

const EpisodeContainer = (props) => (
	<Episode
		episode={props.episode}
		podcast={props.podcast}
		startPlayback={props.startPlayback}
		navigation={props.navigation}
	/>
)

export default connect(
	(state) => ({
		episode: state.podcasts.currentEpisode,
		podcast: state.podcasts.currentPodcast,
	}),
	{ startPlayback }
)(EpisodeContainer)
