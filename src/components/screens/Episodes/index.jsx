import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { startPlayback } from '@app/modules/player/actions'

import EpisodeListItem from './EpisodeListItem'
import episodes from './episodes'

const EpisodeList = (props) => {
	return (
		<FlatList
			testID="episode-list"
			keyExtractor={(item) => item.id}
			data={episodes}
			renderItem={({ item }) => (
				<EpisodeListItem
					onPress={() => {
						props.startPlayback(item)
						props.navigation.navigate('Player')
					}}
					title={item.title}
					artist={item.artist}
					image={item.image}
				/>
			)}
		/>
	)
}

export default connect(() => ({}), {
	startPlayback,
})(EpisodeList)
