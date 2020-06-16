import React from 'react'
import { ScrollView } from 'react-native'
import FriendItem from './FriendItem'

const FriendsList = ({ subscriptions, navigation }) => (
	<ScrollView>
		{subscriptions.map((subscription) => (
			<FriendItem
				key={subscriptions.indexOf(subscription)}
				navigation={navigation}
				image={subscription.friend.image_url}
				firstName={subscription.friend.first_name}
				lastName={subscription.friend.last_name}
				username={subscription.friend.username}
			/>
		))}
	</ScrollView>
)

export default FriendsList
