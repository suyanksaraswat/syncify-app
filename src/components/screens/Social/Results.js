import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import FriendItem from './FriendItem'
import { HeaderBox, HeaderText } from './styles'

const Results = ({ results }) => {
	const renderIcon = () => (
		<TouchableOpacity>
			<FontAwesome5 name="user-plus" size={30} />
		</TouchableOpacity>
	)

	const renderItem = ({
		item: { first_name: firstName, last_name: lastName, imageUrl },
	}) => {
		return (
			<FriendItem
				firstName={firstName}
				lastName={lastName}
				image={imageUrl}
				renderIcon={renderIcon}
			/>
		)
	}

	return (
		<>
			<HeaderBox>
				<HeaderText>Results</HeaderText>
			</HeaderBox>
			<FlatList
				data={results}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</>
	)
}

export default Results
