import React from 'react'
import { connect } from 'react-redux'
import { getAllUsers, searchUsers } from '@app/modules/social/actions'
import SocialScreen from './SocialScreen'

const Social = (props) => <SocialScreen {...props} />

export default connect(
	(state) => ({
		allUsers: state.social.allUsers,
		filteredUsers: state.social.filteredUsers,
	}),
	{
		getAllUsers,
		searchUsers,
	}
)(Social)
