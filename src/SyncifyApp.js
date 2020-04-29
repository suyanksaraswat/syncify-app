import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import BottomTabNavigator from './components/common/navigation/BottomTabNavigator'

export default function App({ containerRef, initialNavigationState }) {
	return (
		<View style={styles.container}>
			{Platform.OS === 'ios' && <StatusBar barStyle="default" />}

			<BottomTabNavigator
				container={containerRef}
				initialNavigationState={initialNavigationState}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
