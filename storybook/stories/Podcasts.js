import React from 'react'
import podcastList from '@app/modules/podcasts/podcastList'
import Podcasts from '../../src/components/screens/Podcasts/PodcastsScreen'

export default function () {
	const props = {
		subscriptions: podcastList,
		selectPodcast: { selectPodcast: () => {} },
	}

	return <Podcasts {...props} />
}
