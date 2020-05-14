import React from 'react'
import { Text, View, Slider } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
	seekSliderValueChange,
	seekSliderSlidingComplete,
} from '@app/modules/player/actions'

const ProgressSlider = (props) => {
	const getSeekSliderPosition = () => {
		return props.playbackInstancePosition / props.playbackInstanceDuration
	}

	return (
		<ProgressContainer>
			<SliderBar
				value={getSeekSliderPosition()}
				minimumTrackTintColor="grey"
				maximumTrackTintColor="#000000"
				onValueChange={() => props.seekSliderValueChange()}
				onSlidingComplete={(value) =>
					props.seekSliderSlidingComplete(value)
				}
			/>
			<TimerContainer>
				<Time>
					{new Date(Math.floor(props.playbackInstancePosition))
						.toISOString()
						.substr(11, 8)}
				</Time>
				<Time>
					{new Date(Math.floor(props.playbackInstanceDuration))
						.toISOString()
						.substr(11, 8)}
				</Time>
			</TimerContainer>
		</ProgressContainer>
	)
}

const TimerContainer = styled(View)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
`

const Time = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
`

const ProgressContainer = styled(View)`
	display: flex;
	width: 100%;
	margin-top: 10px;
	flex-direction: column;
	align-items: center;
`

const SliderBar = styled(Slider)`
	width: 100%;
	height: 50px;
	margin-top: ${({ theme }) => theme.metrics.mediumSize}px;
`

export default connect(
	(state) => ({
		playbackInstancePosition: state.player.playbackInstancePosition,
		playbackInstanceDuration: state.player.playbackInstanceDuration,
	}),
	{
		seekSliderValueChange,
		seekSliderSlidingComplete,
	}
)(ProgressSlider)
