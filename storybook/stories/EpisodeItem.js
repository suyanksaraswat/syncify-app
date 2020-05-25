import React from 'react'
import EpisodeItem from '../../src/components/screens/EpisodesList/EpisodeItem'
import { CenteredView } from '../CenteredView'

export default function () {
	const props = {
		navigation: { navigate: () => {} },
		episode: {
			title: 'title',
			pubDate: '2020-04-27 00:00:00',
			enclosure: {
				type: 'audio/mpeg',
				duration: 3230,
			},
		},
	}

	return (
		<CenteredView>
			<EpisodeItem {...props} />
		</CenteredView>
	)
}
