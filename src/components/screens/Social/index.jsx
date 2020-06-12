import React from 'react'
import { connect } from 'react-redux'
import { search, getAllUsers } from '@app/modules/social/actions'
import SocialScreen from './SocialScreen'

const Social = (props) => <SocialScreen {...props} />

export default connect((state) => ({ allUsers: state.social.allUsers, results: state.social.results }), {
	getAllUsers, search
})(Social)
