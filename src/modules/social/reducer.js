import { CONNECTIONS_SEARCH_SUCCESS } from './actions'

const initialState = {
	results: [],
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case CONNECTIONS_SEARCH_SUCCESS:
			return { results: action.payload }
		default:
			return state
	}
}
