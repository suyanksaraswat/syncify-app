import * as React from 'react'
import { Audio } from 'expo-av'
import { Platform, StatusBar, View } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import theme from '@app/styles'

import store from '@app/modules/store'
import Router from '@app/routes/Router'

Audio.setAudioModeAsync({
	allowsRecordingIOS: false,
	staysActiveInBackground: false,
	interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
	playsInSilentModeIOS: true,
	shouldDuckAndroid: true,
	interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
	playThroughEarpieceAndroid: false,
})

export default function SyncifyApp({ containerRef, initialNavigationState }) {
	return (
		<ReduxProvider store={store}>
			<ThemeProvider theme={theme}>
				<Container>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}

					<Router
						container={containerRef}
						initialNavigationState={initialNavigationState}
					/>
				</Container>
			</ThemeProvider>
		</ReduxProvider>
	)
}

const Container = styled(View)`
	flex: 1
	background-color: #fff
`
