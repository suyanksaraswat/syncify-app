import React from 'react'
import { Episodes } from '../../src/components/screens/EpisodesList'

export default function () {
	const props = {
		podcast: {
			meta: {
				imageURL:
					'https://f.prxu.org/96/images/a52a20dd-7b8e-46be-86a0-dda86b0953fc/99-300.png',
			},
			episodes: [
				{
					description: 'description',
					title: 'title',
					pubDate: '2020-04-27 00:00:00',
					enclosure: {
						type: 'audio/mpeg',
						duration: 3230,
					},
				},
			],
		},
		navigation: { navigate: () => {} },
	}

	return <Episodes {...props} />
}
