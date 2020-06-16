import { CONNECTIONS_SEARCH_SUCCESS } from './actions'

export const initialState = {
	allUsers: [],
	results: [],
	filteredUsers: null,
	subscriptions: [],
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case CONNECTIONS_SEARCH_SUCCESS: {
			return {
				...state,
				results: action.payload,
			}
		}

		case 'GET_ALL_USERS': {
			return {
				...state,
				allUsers: action.payload.users,
			}
		}

		case 'GET_CONNECTIONS': {
			return {
				...state,
				subscriptions: action.payload.connections,
			}
		}

		case 'SEARCH_USERS': {
			return {
				...state,
				filteredUsers: action.payload.filteredUsers,
			}
		}

		default: {
			return {
				...state,
			}
		}
	}
}
