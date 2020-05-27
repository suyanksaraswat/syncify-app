import * as React from 'react'
import { Text } from 'react-native'
import Screen from '@app/components/layout/Screen'
import { connect } from 'react-redux'
import { login } from '@app/modules/auth/actions'

const SignIn = (props) => {
	props.login()
	return (
		<Screen>
			<Text>Sign In</Text>
		</Screen>
	)
}
export default connect(() => ({}), {
	login,
})(SignIn)
