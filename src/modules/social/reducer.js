import { CONNECTIONS_SEARCH_SUCCESS } from './actions'

export const initialState = {
	allUsers: null,
	results: [],
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

		default: {
			return {
				...state,
			}
		}
	}
}
