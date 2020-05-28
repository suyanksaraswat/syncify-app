import * as React from 'react'
import { Button } from 'react-native'
import Screen from '@app/components/layout/Screen'
import { connect } from 'react-redux'
import { login } from '@app/modules/auth/actions'

const SignIn = (props) => (
	<Screen>
		<Button title="Log in" onPress={props.login} />
	</Screen>
)
export default connect(() => ({}), {
	login,
})(SignIn)
