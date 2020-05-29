import gql from 'graphql-tag'

const SignIn = gql`
	mutation signIn(
		$given_name: String
		$family_name: String
		$nickname: String
		$sub: String
	) {
		signIn(
			input: {
				sub: $sub
				given_name: $given_name
				family_name: $family_name
				nickname: $nickname
			}
		) {
			sub
			given_name
			family_name
			nickname
		}
	}
`

export { SignIn }
