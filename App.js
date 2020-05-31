import * as React from 'react'
import Constants from 'expo-constants'

import Storybook from './storybook'
import Main from './Main'

export default function App(props) {
	if (Constants.manifest.slug === 'storybook') {
		return <Storybook />
	}

	return <Main {...props} />
}
