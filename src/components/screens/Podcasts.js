import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { play, pause } from '@app/modules/player/actions'

const Wrapper = styled(View)`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`

const Message = styled(Text)`
	font-size: 20px;
	color: black;
`

const Podcasts = (props) => (
	<Wrapper testID="playlists-wrapper">
		<Message>Podcasts: {props.playState}</Message>

		<TouchableOpacity onPress={() => props.play()}>
			<Text>Play</Text>
		</TouchableOpacity>

		<TouchableOpacity onPress={() => props.pause()}>
			<Text>Pause</Text>
		</TouchableOpacity>
	</Wrapper>
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
