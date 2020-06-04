import React from 'react'
import top100 from '@app/modules/podcasts/top100'
import Podcasts from '../../src/components/screens/Podcasts/PodcastsScreen'

export default function () {
	const props = {
		subscriptions: top100,
		selectPodcast: { selectPodcast: () => {} },
	}

	return <Podcasts {...props} />
}
