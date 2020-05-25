import React from 'react'
import EpisodeHeader from '../../src/components/screens/EpisodesList/EpisodeHeader'
import { CenteredView } from '../CenteredView'

export default function () {
	const podcast = {
		feed: {
			title: 'Freakonomics Radio',
			image:
				'https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/14a43378-edb2-49be-8511-ab0d000a7030/d1b9612f-bb1b-4b85-9c0c-ab0d004ab37a/image.jpg?t=1574397273&amp;size=Large',
		},
	}

	return (
		<CenteredView>
			<EpisodeHeader podcast={podcast} />
		</CenteredView>
	)
}
