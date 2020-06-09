import React from 'react'
import { View, FlatList } from 'react-native'
import styled from 'styled-components'

import PodcastItem from './PodcastItem'
import SearchBar from './SearchBar'

const Podcasts = (props) => (
	<Wrapper>
		<SearchBar />
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
	align-items: center;
`

const Item = styled(PodcastItem)`
	flex-direction: row;
	flex-wrap: wrap;
`

export default Podcasts
