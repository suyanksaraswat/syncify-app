import gql from 'graphql-tag'

const GetAllUsersQuery = gql`
	query {
		users {
			id
			username
			email
			first_name
			last_name
			social_login_type
			auth0_id
			image_url
		}
	}
`

export { GetAllUsersQuery }
