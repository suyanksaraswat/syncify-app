import React from 'react'
import Screen from '@app/components/layout/Screen'
import EpisodeCover from './EpisodeCover'
import EpisodeTitle from './EpisodeTitle'

const Episode = (props) => (
	<Screen>
		<EpisodeCover episode={props.episode} />
		<EpisodeTitle episode={props.episode} podcast={props.podcast} />
	</Screen>
)

export default Episode
