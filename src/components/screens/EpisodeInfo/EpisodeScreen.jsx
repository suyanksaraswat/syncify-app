import React from 'react'
import { Text } from 'react-native'
import Screen from '@app/components/layout/Screen'
import EpisodeCover from './EpisodeCover'


const Episode = (props) => (
	<Screen>
		<EpisodeCover episode={props.episode} />
		<Text> {props.episode.title} </Text>
	</Screen>
)

export default Episode
