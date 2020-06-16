import { GetAllUsersQuery } from '@app/graphql/queries/getAllUsers'
import { getConnectionsQuery } from '@app/graphql/queries/getConnections'
import { client } from '@app/graphql/client'
import searchResults from './data/searchResults'

export const CONNECTIONS_SEARCH_SUCCESS = 'CONNECTIONS_SEARCH_SUCCESS'

export const search = () => async (dispatch) => {
	dispatch({ type: CONNECTIONS_SEARCH_SUCCESS, payload: searchResults })
}

export const getAllUsers = () => async (dispatch) => {
	const response = await client.query({
		query: GetAllUsersQuery,
	})

	dispatch({
		type: 'GET_ALL_USERS',
		payload: { users: response.data.users },
	})
}

export const getConnections = (userId) => async (dispatch) => {
	const response = await client.query({
		variables: { id: userId },
		query: getConnectionsQuery,
	})

	dispatch({
		type: 'GET_CONNECTIONS',
		payload: { connections: response.data.friendList },
	})
}

export const searchUsers = (input) => async (dispatch, getState) => {
	const allUsers = getState().social.allUsers
	const lowCaseInput = input.toLowerCase()

	const matchesUser = (user) => {
		const firstName = user.first_name.toLowerCase().indexOf(lowCaseInput)
		const lastName = user.last_name.toLowerCase().indexOf(lowCaseInput)

		return firstName > -1 || lastName > -1
	}

	dispatch({
		type: 'SEARCH_USERS',
		payload: {
			filteredUsers: allUsers.filter(matchesUser),
		},
	})
}
