import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import FriendItem from './FriendItem'
import { HeaderBox, HeaderText } from './styles'

const Results = ({ users, connections }) => {
	const renderIcon = () => (
		<TouchableOpacity>
			<FontAwesome5 name="user-plus" size={30} />
		</TouchableOpacity>
	)

	const renderItem = ({
		item: {
			first_name: firstName,
			last_name: lastName,
			image_url: imageUrl,
			username,
		},
	}) => {
		return (
			<FriendItem
				firstName={firstName}
				lastName={lastName}
				image={imageUrl}
				renderIcon={renderIcon}
				username={username}
			/>
		)
	}

	return (
		<>
			<FlatList
				ListHeaderComponent={
					<HeaderBox>
						<HeaderText>Your connections</HeaderText>
					</HeaderBox>
				}
				data={connections}
				renderItem={({ item }) => (
					<FriendItem
						firstName={item.friend.first_name}
						lastName={item.friend.last_name}
						image={item.friend.image_url}
						username={item.friend.username}
					/>
				)}
				keyExtractor={(item) => item.friend.id}
			/>

			<FlatList
				ListHeaderComponent={
					<HeaderBox>
						<HeaderText>Discover</HeaderText>
					</HeaderBox>
				}
				data={users}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</>
	)
}

export default Results
