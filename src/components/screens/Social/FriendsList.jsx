import React from 'react'
import { ScrollView } from 'react-native'
import friends from '@app/modules/social/data/friends'
import FriendItem from './FriendItem'

const FriendsList = (props) => (
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
)

export default FriendsList
