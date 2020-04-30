import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { startPlayback } from '@app/modules/player/actions'

import EpisodeListItem from './EpisodeListItem'
import episodes from './episodes'

const EpisodeList = (props) => (
	<FlatList
		testID="episode-list"
		keyExtractor={(item) => item.id}
		renderItem={({ item, index }) => (
			<EpisodeListItem
				onPress={() => {
					props.startPlayback(item.audio)

					props.navigation.navigate('Player', {
						indexEpisodeSelected: index,
						playlist: episodes,
					})
				}}
				episodeTitle={item.title}
				author={item.author}
				image={item.image}
			/>
		)}
		data={episodes}
	/>
)

export default connect(() => ({}), {
	startPlayback,
})(EpisodeList)
