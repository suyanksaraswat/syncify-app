import React from 'react'
import { Text, Button } from 'react-native'
import Screen from '@app/components/layout/Screen'
import { connect } from 'react-redux'
import { logout } from '@app/modules/auth/actions'

const Profile = (props) => (
	<Screen>
		<Text>Profile</Text>

		<Button title="Log out" onPress={props.logout} />
	</Screen>
)

export default connect(() => ({}), {
	logout,
})(Profile)
