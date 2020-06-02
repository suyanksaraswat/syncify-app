import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import {
	seekSliderValueChange,
	seekSliderSlidingComplete,
	playOrPause,
	skipSeconds,
} from '@app/modules/player/actions'
import { View } from 'react-native'
import styled from 'styled-components'
import Button from '@app/components/common/Button'

import { PLAY_STATE } from '@app/modules/constants'
import PlayerScreen from './PlayerScreen'

const Player = (props) => {
	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerLeft: () => (
				<ButtonsWrapper>
					<Button
						onPress={() => props.navigation.pop()}
						name="chevron-down"
						size={40}
					/>
				</ButtonsWrapper>
			),
		})
	}, [])

	return (
		<PlayerScreen
			playbackInstancePosition={props.playbackInstancePosition}
			playbackInstanceDuration={props.playbackInstanceDuration}
			seekSliderValueChange={props.seekSliderValueChange}
			seekSliderSlidingComplete={props.seekSliderSlidingComplete}
			currentTrack={props.currentTrack}
			podcast={props.podcast}
			isPlaying={props.isPlaying}
			playOrPause={props.playOrPause}
			skipSeconds={props.skipSeconds}
		/>
	)
}

const ButtonsWrapper = styled(View)`
	padding-left: ${({ theme }) => theme.metrics.mediumSize}px;
`

export default connect(
	(state) => ({
		playbackInstancePosition: state.player.playbackInstancePosition,
		playbackInstanceDuration: state.player.playbackInstanceDuration,
		currentTrack: state.player.currentTrack || {},
		podcast: state.podcasts.currentPodcast,
		isPlaying: state.player.playState === PLAY_STATE.PLAYING,
	}),
	{
		seekSliderValueChange,
		seekSliderSlidingComplete,
		playOrPause,
		skipSeconds,
	}
)(Player)
