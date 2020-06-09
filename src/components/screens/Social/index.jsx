import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import styled from 'styled-components'
import Screen from '@app/components/layout/Screen'
import friends from '@app/modules/social/data/friends'
import FriendItem from './FriendItem'

const Social = (props) => (
	<Screen>
		<HeaderBox>
			<HeaderText>My Connections</HeaderText>
		</HeaderBox>
		<ScrollView>
			{friends.map((friend) => (
				<FriendItem
					key={friends.indexOf(friend)}
					navigation={props.navigation}
					image={friend.imageUrl}
					firstName={friend.first_name}
					lastName={friend.last_name}
					username={friend.username}
				/>
			))}
		</ScrollView>
	</Screen>
)

const HeaderBox = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	padding: ${({ theme }) => theme.metrics.largeSize}px;
	display: flex;
	justify-content: center;
`
const HeaderText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6.5%')}px;
	color: ${({ theme }) => theme.colors.skyBlue};
	flex: 1;
`

export default Social
