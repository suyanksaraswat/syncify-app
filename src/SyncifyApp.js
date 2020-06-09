import * as React from 'react'
import { Audio } from 'expo-av'
import { Platform, StatusBar, View } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'
import styled, { ThemeProvider } from 'styled-components'
import theme from '@app/styles'

import store from '@app/modules/store'
import Navigation from '@app/navigation/Navigation'
import { client } from '@app/graphql/client'

Audio.setAudioModeAsync({
	allowsRecordingIOS: false,
	staysActiveInBackground: true,
	interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
	playsInSilentModeIOS: true,
	shouldDuckAndroid: true,
	interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
	playThroughEarpieceAndroid: false,
})

export default function SyncifyApp({ containerRef, initialNavigationState }) {
	return (
		<ApolloProvider client={client}>
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>
					<Container>
						{Platform.OS === 'ios' && (
							<StatusBar barStyle="default" />
						)}

						<Navigation
							container={containerRef}
							initialNavigationState={initialNavigationState}
						/>
					</Container>
				</ThemeProvider>
			</ReduxProvider>
		</ApolloProvider>
	)
}

const Container = styled(View)`
	flex: 1
	background-color: #fff
`
