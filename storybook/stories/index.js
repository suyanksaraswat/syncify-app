import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '@app/styles'
import rootReducer from '../../src/modules/reducers'

import SignIn from './SignIn'
import SignUp from './SignUp'
import EpisodeList from './EpisodeList'
import Social from './Social'
import Profile from './Profile'
import Podcasts from './Podcasts'
import Player from './Player'
import EpisodeInfo from './EpisodeInfo'
import Home from './Home'

const store = createStore(rootReducer)

storiesOf('UI Components', module)
	.addDecorator((storyFn) => (
		<Provider store={store}>
			<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
		</Provider>
	))
	.add('SignIn', () => <SignIn />)
	.add('SignUp', () => <SignUp />)
	.add('EpisodeList', () => <EpisodeList />)
	.add('Social', () => <Social />)
	.add('Profile', () => <Profile />)
	.add('Podcasts', () => <Podcasts />)
	.add('Player', () => <Player />)
	.add('Episode Info', () => <EpisodeInfo />)
	.add('Home', () => <Home />)
