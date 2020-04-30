import * as React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import theme from '@app/styles'

import store from '@app/modules/store'
import Router from '@app/routes/Router'

const Container = styled(View)`
	flex: 1
	background-color: #fff
`

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
