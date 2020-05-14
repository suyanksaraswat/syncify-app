import React from 'react'
import Screen from '@app/components/layout/Screen'
import EpisodeCover from './EpisodeCover'
import TrackTextInfo from './TrackTextInfo'
import PlayerControls from './PlayerControls'
import ProgressBar from './ProgressBar'

const Player = () => (
	<Screen>
		<EpisodeCover />
		<TrackTextInfo />
		<ProgressBar />
		<PlayerControls />
	</Screen>
)

export default Player
