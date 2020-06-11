import React from 'react'
import { ScrollView } from 'react-native'
import Screen from '@app/components/layout/Screen'
import SearchBar from '@app/components/common/SearchBar'
import friends from '@app/modules/social/data/friends'
import useSearch from '@app/hooks/useSearch'
import FriendItem from './FriendItem'
import Results from './Results'
import { HeaderBox, HeaderText } from './styles'

const Social = ({ navigation, search, results }) => {
	const { searchValue, setSearchValue } = useSearch(search)

	const renderConnections = () => {
		return (
			<>
				<HeaderBox>
					<HeaderText>My Connections</HeaderText>
				</HeaderBox>
				<ScrollView>
					{friends.map((friend) => (
						<FriendItem
							key={friends.indexOf(friend)}
							navigation={navigation}
							image={friend.imageUrl}
							firstName={friend.first_name}
							lastName={friend.last_name}
							username={friend.username}
						/>
					))}
				</ScrollView>
			</>
		)
	}

	return (
		<Screen>
			<SearchBar
				value={searchValue}
				onChange={setSearchValue}
				placeholder="Search for connections"
			/>
			{searchValue ? <Results results={results} /> : renderConnections()}
		</Screen>
	)
}

export default Social
