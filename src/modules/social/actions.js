import { GetAllUsersQuery } from '@app/graphql/queries/getAllUsers'
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
