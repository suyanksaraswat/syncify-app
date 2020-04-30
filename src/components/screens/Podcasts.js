import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { play, pause } from '@app/modules/player/actions'
import Screen from '@app/components/layout/Screen'

const Message = styled(Text)`
	font-size: 20px;
	color: black;
`

const Podcasts = (props) => (
	<Screen testID="playlists-wrapper">
		<Message>Podcasts: {props.playState}</Message>

		<TouchableOpacity onPress={() => props.play()}>
			<Text>Play</Text>
		</TouchableOpacity>

		<TouchableOpacity onPress={() => props.pause()}>
			<Text>Pause</Text>
		</TouchableOpacity>
	</Screen>
)

export default connect(
	(state) => ({
		playState: state.player.playState,
	}),
	{
		play,
		pause,
	}
)(Podcasts)
