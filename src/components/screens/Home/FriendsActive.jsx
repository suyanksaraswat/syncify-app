import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import friends from '@app/modules/social/data/friends'
import FriendImage from '@app/components/common/FriendImage'

const FriendsActive = () => (
	<Container>
		<FlatList
			data={friends}
			horizontal
			renderItem={({ item }) => (
				<TouchableOpacity>
					<FriendImage
						key={item.username}
						onPress={() => {}}
						image={item.imageUrl}
					/>
				</TouchableOpacity>
			)}
			keyExtractor={(item) => item.username}
		/>
	</Container>
)

const Container = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('95%')}px;
	margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('5%')}px;
`

export default FriendsActive
