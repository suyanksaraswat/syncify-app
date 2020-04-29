import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'

import store from '@app/modules/store'
import BottomTabNavigator from '@app/components/common/navigation/BottomTabNavigator'

export default function SyncifyApp({ containerRef, initialNavigationState }) {
	return (
		<ReduxProvider store={store}>
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}

				<BottomTabNavigator
					container={containerRef}
					initialNavigationState={initialNavigationState}
				/>
			</View>
		</ReduxProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
