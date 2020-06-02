import React from 'react'
import { Text } from 'react-native'

import Screen from '@app/components/layout/Screen'

const Episode = (props) => (
	<Screen>
		<Text> {props.episode.title} </Text>
	</Screen>
)

export default Episode
