import React from 'react'
import { View, FlatList } from 'react-native'
import styled from 'styled-components'

import PodcastItem from './PodcastItem'
import SearchBar from './SearchBar'

const Podcasts = (props) => (
	<Wrapper>
		<SearchBar
			searchPodcasts={props.searchPodcasts}
			data={props.subscriptions}
		/>
		<FlatList
			data={props.subscriptions}
			numColumns={4}
			renderItem={({ item }) => (
				<Item
					key={item.meta.description}
					onPress={() => {
						props.selectPodcast(item.meta.title)
						props.navigation.navigate('Episodes')
					}}
					image={item.meta.imageURL}
				/>
			)}
			keyExtractor={(item) => item.meta.imageURL}
		/>
	</Wrapper>
)

const Wrapper = styled(View)`
	flex-direction: column;
	margin: ${({ theme }) => theme.metrics.getWidthFromDP('2.5%')}px;
`

const Item = styled(PodcastItem)`
	flex-direction: row;
	flex-wrap: wrap;
`

export default Podcasts
