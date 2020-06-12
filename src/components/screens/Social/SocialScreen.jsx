import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components'
import Screen from '@app/components/layout/Screen'
import Button from '@app/components/common/Button'
import FriendsList from './FriendsList'

const SocialScreen = (props) => (
	<Screen>
		<HeaderBox>
			<HeaderText>My Connections</HeaderText>
			<Button
				onPress={() => {
					props.getAllUsers()
				}}
				name="account-plus"
				size={35}
			/>
		</HeaderBox>
		<FriendsList />
		{props.allUsers && (
			<HeaderBox>
				<HeaderText>Add More Friends</HeaderText>
			</HeaderBox>
		)}
		{props.allUsers && (
			<FlatList
				data={props.allUsers}
				numColumns={1}
				renderItem={({ item }) => (
					<View key={item.id} onPress={() => {}}>
						<Text>{item.username}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		)}
	</Screen>
)

const HeaderBox = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	padding: ${({ theme }) => theme.metrics.largeSize}px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`
const HeaderText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6.5%')}px;
	color: ${({ theme }) => theme.colors.skyBlue};
`

export default SocialScreen
