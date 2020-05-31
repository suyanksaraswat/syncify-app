import top100 from './top100'

export const initialState = {
	subscriptions: top100,
	currentPodcast: null,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECT_PODCAST': {
			return {
				...state,
				currentPodcast: action.payload,
			}
		}
		case 'NOTHING_YET': {
			return {
				...state,
			}
		}

		default:
			return state
	}
}
