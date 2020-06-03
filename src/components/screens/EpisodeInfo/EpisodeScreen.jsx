import React from 'react'
import Screen from '@app/components/layout/Screen'
import EpisodeCover from './EpisodeCover'
import EpisodeTitle from './EpisodeTitle'
import LengthAndDate from './LengthAndDate'
import RedButton from './PlayRedButton'

const Episode = (props) => (
	<Screen>
		<EpisodeCover episode={props.episode} />
		<EpisodeTitle episode={props.episode} podcast={props.podcast} />
		<LengthAndDate episode={props.episode} />
		<RedButton
			startPlayback={props.startPlayback}
			episode={props.episode}
			navigation={props.navigation}
		/>
	</Screen>
)

export default Episode
