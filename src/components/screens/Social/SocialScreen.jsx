import React from 'react'
import styled from 'styled-components'
import { View, Text, FlatList, ScrollView } from 'react-native'
import Screen from '@app/components/layout/Screen'
import SearchBar from '@app/components/common/SearchBar'
import Button from '@app/components/common/Button'
import Results from './Results'
import { HeaderBox, HeaderText } from './styles'
import FriendsList from './FriendsList'

const SocialScreen = (props) => {
	const [value, onChangeText] = React.useState(null)

	const renderConnections = () => {
		return (
			<ScrollScreen>
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
				{props.allUsers.length > 0 && (
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
			</ScrollScreen>
		)
	}

	return (
		<Screen>
			<SearchBar
				value={value}
				onChange={(text) => {
					onChangeText(text)
					if (props.allUsers.length < 1) {
						props.getAllUsers()
					}
					props.searchUsers(text)
				}}
				placeholder="Search for connections"
			/>
			{value ? (
				<Results results={props.filteredUsers} />
			) : (
				renderConnections()
			)}
		</Screen>
	)
}

const ScrollScreen = styled(ScrollView)`
	height: 100%;
`

export default SocialScreen
