import results from './data/results'

export const initialState = {
	searchResults: results,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'NOTHING_YET': {
			return {
				...state,
			}
		}

		default:
			return state
	}
}
