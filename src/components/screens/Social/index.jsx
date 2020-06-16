import React from 'react'
import { connect } from 'react-redux'
import {
	getAllUsers,
	searchUsers,
	getConnections,
	searchSubscriptions,
} from '@app/modules/social/actions'
import SocialScreen from './SocialScreen'

const Social = (props) => {
	const userID = 8

	props.getConnections(userID)
	props.getAllUsers()

	return <SocialScreen {...props} />
}

export default connect(
	(state) => ({
		allUsers: state.social.allUsers,
		filteredUsers: state.social.filteredUsers,
		subscriptions: state.social.subscriptions,
		filteredSubscriptions: state.social.filteredSubscriptions,
	}),
	{
		getAllUsers,
		searchUsers,
		getConnections,
		searchSubscriptions,
	}
)(Social)
