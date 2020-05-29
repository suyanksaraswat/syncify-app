import React from 'react'
import PodcastItem from '../../src/components/screens/Podcasts/PodcastItem'

export default function () {
	const image =
		'https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/14a43378-edb2-49be-8511-ab0d000a7030/d1b9612f-bb1b-4b85-9c0c-ab0d004ab37a/image.jpg?t=1574397273&amp;size=Large'
	const onPress = () => {}

	return <PodcastItem image={image} onPress={onPress} />
}
