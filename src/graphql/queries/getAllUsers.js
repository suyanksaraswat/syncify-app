import gql from 'graphql-tag'

const GetAllUsersQuery = gql`
	query {
		users {
			id
			username
			first_name
			last_name
		}
	}
`

export { GetAllUsersQuery }
