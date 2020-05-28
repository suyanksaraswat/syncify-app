import * as React from 'react'
import { Text, Button } from 'react-native'
import Screen from '@app/components/layout/Screen'
import { connect } from 'react-redux'
import { login } from '@app/modules/auth/actions'

const SignIn = (props) => (
	<Screen>
		<Text>Sign In</Text>

		<Button title="Log in with Auth0" onPress={props.login} />
	</Screen>
)
export default connect(() => ({}), {
	login,
})(SignIn)
