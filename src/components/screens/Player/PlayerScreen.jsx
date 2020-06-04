import React from 'react'
import Screen from '@app/components/layout/Screen'
import EpisodeCover from './EpisodeCover'
import TrackTextInfo from './TrackTextInfo'
import PlayerControls from './PlayerControls'
import ProgressBar from './ProgressBar'

const PlayerScreen = (props) => (
	<Screen>
		<EpisodeCover currentTrack={props.currentTrack} />
		<TrackTextInfo
			currentTrack={props.currentTrack}
			podcast={props.podcast}
		/>
		<ProgressBar
			playbackInstancePosition={props.playbackInstancePosition}
			playbackInstanceDuration={props.playbackInstanceDuration}
			seekSliderValueChange={props.seekSliderValueChange}
			seekSliderSlidingComplete={props.seekSliderSlidingComplete}
		/>
		<PlayerControls
			isPlaying={props.isPlaying}
			playOrPause={props.playOrPause}
			skipSeconds={props.skipSeconds}
		/>
	</Screen>
)

export default PlayerScreen
