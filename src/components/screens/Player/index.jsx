import React from 'react'
import Screen from '@app/components/layout/Screen'
import EpisodeCover from './EpisodeCover'
import TrackTextInfo from './TrackTextInfo'
import PlayerControls from './PlayerControls'
import OptionsBar from './OptionsBar'
import ProgressBar from './ProgressBar'

const Player = () => (
	<Screen>
		<EpisodeCover />
		<TrackTextInfo />
		<ProgressBar />
		<PlayerControls />
		<OptionsBar />
	</Screen>
)

export default Player
