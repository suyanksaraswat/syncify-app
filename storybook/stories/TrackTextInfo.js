import React from 'react'
import TrackTextInfo from '../../src/components/screens/Player/TrackTextInfo'

export default function () {
	const props = {
		currentTrack: {
			title: '416. How Do You Reopen a Country?',
			author: 'Freakonomics Radio',
		},
	}

	return <TrackTextInfo {...props} />
}
