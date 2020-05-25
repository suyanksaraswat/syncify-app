import React from 'react'
import { storiesOf } from '@storybook/react-native'
import MiniPlayer from './MiniPlayer'
import Button from './Button'
import Icon from './Icon'
import SignIn from './SignIn'
import SignUp from './SignUp'
import EpisodeItem from './EpisodeItem'
import EpisodeHeader from './EpisodeHeader'
import EpisodeCover from './EpisodeCover'
import OptionsBar from './OptionsBar'
import PlayerControls from './PlayerControls'
import ProgressBar from './ProgressBar'
import TrackTextInfo from './TrackTextInfo'

storiesOf('UI Components', module)
	.add('MiniPlayer', () => <MiniPlayer />)
	.add('Button', () => <Button />)
	.add('Icon', () => <Icon />)
	.add('SignIn', () => <SignIn />)
	.add('SignUp', () => <SignUp />)
	.add('EpisodeItem', () => <EpisodeItem />)
	.add('EpisodeHeader', () => <EpisodeHeader />)
	.add('EpisodeCover', () => <EpisodeCover />)
	.add('OptionsBar', () => <OptionsBar />)
	.add('PlayerControls', () => <PlayerControls />)
	.add('ProgressBar', () => <ProgressBar />)
	.add('TrackTextInfo', () => <TrackTextInfo />)
