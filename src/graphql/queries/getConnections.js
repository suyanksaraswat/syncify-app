import gql from 'graphql-tag'

const getConnectionsQuery = gql`
	query friendList($id: ID!) {
		friendList(id: $id) {
			friend {
				id
				username
				first_name
				last_name
				image_url
			}
		}
	}
`

export { getConnectionsQuery }
