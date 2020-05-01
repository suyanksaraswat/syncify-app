import React from 'react'
import Screen from '@app/components/layout/Screen'
import episodes from '@app/components/screens/Episodes/episodes'
import EpisodeCover from './EpisodeCover'
import TrackTextInfo from './TrackTextInfo'
import PlayerControls from './PlayerControls'
import OptionsBar from './OptionsBar'
import ProgressBar from './ProgressBar'

const Player = () => (
	<Screen>
		<EpisodeCover />
		<TrackTextInfo track={episodes[0]} />
		<ProgressBar />
		<PlayerControls />
		<OptionsBar />
	</Screen>
)

export default Player
