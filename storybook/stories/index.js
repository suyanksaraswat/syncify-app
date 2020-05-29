import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '@app/styles'
import rootReducer from '../../src/modules/reducers'
import { CenteredView } from '../CenteredView'

import MiniPlayer from './MiniPlayer'
import Button from './Button'
import Icon from './Icon'
import EpisodeItem from './EpisodeItem'
import EpisodeHeader from './EpisodeHeader'
import EpisodeCover from './EpisodeCover'
import OptionsBar from './OptionsBar'
import PlayerControls from './PlayerControls'
import ProgressBar from './ProgressBar'
import TrackTextInfo from './TrackTextInfo'
import PodcastItem from './PodcastItem'
import PodcastsEmptyState from './PodcastsEmptyState'

const store = createStore(rootReducer)

storiesOf('UI Components', module)
	.addDecorator((storyFn) => (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CenteredView>{storyFn()}</CenteredView>
			</ThemeProvider>
		</Provider>
	))
	.add('MiniPlayer', () => <MiniPlayer />)
	.add('Button', () => <Button />)
	.add('Icon', () => <Icon />)
	.add('EpisodeItem', () => <EpisodeItem />)
	.add('EpisodeHeader', () => <EpisodeHeader />)
	.add('EpisodeCover', () => <EpisodeCover />)
	.add('OptionsBar', () => <OptionsBar />)
	.add('PlayerControls', () => <PlayerControls />)
	.add('ProgressBar', () => <ProgressBar />)
	.add('TrackTextInfo', () => <TrackTextInfo />)
	.add('PodcastItem', () => <PodcastItem />)
	.add('PodcastsEmptyState', () => <PodcastsEmptyState />)
