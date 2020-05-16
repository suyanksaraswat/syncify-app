import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import Button from '@app/components/common/Button'
import { connect } from 'react-redux'

import { playOrPause, skipSeconds } from '@app/modules/player/actions'
import { PLAY_STATE } from '@app/modules/constants'

const PlayerControls = (props) => {
	return (
		<ButtonsWrapper>
			<Button
				onPress={() => props.skipSeconds(-15)}
				name="undo"
				size={35}
			/>
			<Button
				onPress={() => props.playOrPause()}
				name={!props.isPlaying ? 'play-circle' : 'pause-circle'}
				size={70}
			/>
			<Button
				onPress={() => props.skipSeconds(15)}
				name="redo"
				size={35}
			/>
		</ButtonsWrapper>
	)
}

const ButtonsWrapper = styled(View)`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding-left: ${({ theme }) => theme.metrics.extraLargeSize}px;
	padding-right: ${({ theme }) => theme.metrics.extraLargeSize}px;
`

export default connect(
	(state) => ({
		isPlaying: state.player.playState === PLAY_STATE.PLAYING,
	}),
	{
		playOrPause,
		skipSeconds,
	}
)(PlayerControls)
