import React from 'react'
import { connect } from 'react-redux'
import {
	seekSliderValueChange,
	seekSliderSlidingComplete,
	playOrPause,
	skipSeconds,
} from '@app/modules/player/actions'

import { PLAY_STATE } from '@app/modules/constants'
import PlayerScreen from './PlayerScreen'

const Player = (props) => {
	;<PlayerScreen
		playbackInstancePosition={props.playbackInstancePosition}
		playbackInstanceDuration={props.playbackInstanceDuration}
		seekSliderValueChange={props.seekSliderValueChange}
		seekSliderSlidingComplete={props.seekSliderSlidingComplete}
		currentTrack={props.currentTrack}
		podcast={props.currentPodcast}
		isPlaying={props.isPlaying}
		playOrPause={props.playOrPause}
		skipSeconds={props.skipSeconds}
	/>
}

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
