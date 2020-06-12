import React from 'react'
import styled from 'styled-components'
import { View, Text, FlatList, ScrollView } from 'react-native'
import Screen from '@app/components/layout/Screen'
import SearchBar from '@app/components/common/SearchBar'
import useSearch from '@app/hooks/useSearch'
import Button from '@app/components/common/Button'
import Results from './Results'
import { HeaderBox, HeaderText } from './styles'
import FriendsList from './FriendsList'

const SocialScreen = (props) => {
	const { searchValue, setSearchValue } = useSearch(props.search)

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
			</ScrollScreen>
		)
	}

	return (
		<Screen>
			<SearchBar
				value={searchValue}
				onChange={setSearchValue}
				placeholder="Search for connections"
			/>
			{searchValue ? (
				<Results results={props.results} />
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
