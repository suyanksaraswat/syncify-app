import * as React from 'react'
import { SplashScreen } from 'expo'

import SyncifyApp from '@app/SyncifyApp'
import useLinking from '@app/navigation/useLinking'

export default function Main(props) {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false)
	const [initialNavigationState, setInitialNavigationState] = React.useState()
	const containerRef = React.useRef()
	const { getInitialState } = useLinking(containerRef)

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHide()
				setInitialNavigationState(await getInitialState())
			} catch (e) {
				// console.warn(e)
			} finally {
				setLoadingComplete(true)
				SplashScreen.hide()
			}
		}

		loadResourcesAndDataAsync()
	}, [])

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return null
	}
	return (
		<SyncifyApp
			containerRef={containerRef}
			initialNavigationState={initialNavigationState}
		/>
	)
}
