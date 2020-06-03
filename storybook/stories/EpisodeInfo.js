import React from 'react'
import Episode from '../../src/components/screens/EpisodeInfo/EpisodeScreen'

export default function () {
	const props = {
		podcast: {
			meta: {
				imageURL:
					'https://f.prxu.org/96/images/a52a20dd-7b8e-46be-86a0-dda86b0953fc/99-300.png',
				title: 'Freakonomics Radio',
			},
		},
		episode: {
			title: '418. What Will College Look Like in the Fall (and Beyond)?',
			description:
				'Three university presidents try to answer our listeners’ questions. The result? Not much pomp and a whole lot of circumstance.',
			imageURL:
				'https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/14a43378-edb2-49be-8511-ab0d000a7030/d1b9612f-bb1b-4b85-9c0c-ab0d004ab37a/image.jpg?t=1589407970&size=Large',
			pubDate: '2020-05-14T03:00:00.000Z',
			enclosure: {
				type: 'audio/mpeg',
				duration: 3230,
			},
		},

		navigation: { navigate: () => {} },
	}

	return <Episode {...props} />
}
