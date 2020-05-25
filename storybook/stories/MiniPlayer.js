import React from 'react'
import MiniPlayer from '../../src/components/common/MiniPlayer'
import { CenteredView } from '../CenteredView'

export default function () {
	const navigation = { navigate: () => 'navigate' }

	return (
		<CenteredView>
			<MiniPlayer navigation={navigation} />
		</CenteredView>
	)
}
