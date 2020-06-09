import React from 'react'
import { View, FlatList } from 'react-native'
import styled from 'styled-components'
import podcasts from '@app/modules/podcasts/data/top100'

import SquareItemCover from '@app/components/common/SquareItemCover'

const PopularPodcasts = (props) => (
	<Container>
		<FlatList
			data={podcasts}
			horizontal
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
	</Container>
)

const Container = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('95%')}px;
	margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('5%')}px;
`

const Item = styled(SquareItemCover)`
	flex-direction: row;
	flex-wrap: wrap;
`

export default PopularPodcasts
