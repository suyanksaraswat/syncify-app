import gql from 'graphql-tag'

const SignInMutation = gql`
	mutation signIn($token: String!) {
		signIn(input: { token: $token }) {
			auth0_id
			username
			first_name
			last_name
		}
	}
`

export { SignInMutation }
