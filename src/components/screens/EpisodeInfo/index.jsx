import React from 'react'
import { connect } from 'react-redux'
import Episode from './EpisodeScreen'

const EpisodeContainer = (props) => <Episode episode={props.episode} />

export default connect(
	(state) => ({ episode: state.podcasts.currentEpisode }),
	{}
)(EpisodeContainer)
