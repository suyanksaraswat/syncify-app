import React from 'react'
import MiniPlayer from '../../src/components/common/MiniPlayer'

export default function () {
	const navigation = { navigate: () => 'navigate' }

	return <MiniPlayer navigation={navigation} />
}
