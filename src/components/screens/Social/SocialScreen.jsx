import React from 'react'
import styled from 'styled-components'
import { ScrollView } from 'react-native'
import Screen from '@app/components/layout/Screen'
import SearchBar from '@app/components/common/SearchBar'
import Results from './Results'
import { HeaderBox, HeaderText } from './styles'
import FriendsList from './FriendsList'

const SocialScreen = (props) => {
	const [value, onChangeText] = React.useState(null)

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
				<ScrollScreen>
					<HeaderBox>
						<HeaderText>My Connections</HeaderText>
					</HeaderBox>
					<FriendsList
						subscriptions={props.subscriptions}
						navigation={props.navigation}
					/>
				</ScrollScreen>
			)}
		</Screen>
	)
}

const ScrollScreen = styled(ScrollView)`
	height: 100%;
`

export default SocialScreen
