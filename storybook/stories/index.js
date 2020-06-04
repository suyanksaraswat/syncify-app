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
import Explore from './Explore'
import Profile from './Profile'
import Settings from './Settings'
import TopCharts from './TopCharts'
import Podcasts from './Podcasts'
import Player from './Player'

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
	.add('Explore', () => <Explore />)
	.add('Profile', () => <Profile />)
	.add('Settings', () => <Settings />)
	.add('TopCharts', () => <TopCharts />)
	.add('Podcasts', () => <Podcasts />)
	.add('Player', () => <Player />)
