import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components'
import Screen from '@app/components/layout/Screen'
import EpisodeCover from './EpisodeCover'
import EpisodeTitle from './EpisodeTitle'
import LengthAndDate from './LengthAndDate'
import RedButton from './PlayRedButton'
import Description from './EpisodeDescription'

const Episode = (props) => (
	<ScrollScreen>
		<Screen>
			<EpisodeCover episode={props.episode} />
			<EpisodeTitle episode={props.episode} podcast={props.podcast} />
			<LengthAndDate episode={props.episode} />
			<RedButton
				startPlayback={props.startPlayback}
				episode={props.episode}
				navigation={props.navigation}
			/>
			<Description episode={props.episode} />
		</Screen>
	</ScrollScreen>
)

const ScrollScreen = styled(ScrollView)`
	height: 100%;
`

export default Episode
