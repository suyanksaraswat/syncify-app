import subscriptions from './data/subscriptions'
import joeRogan from './data/joe-rogan'

export const initialState = {
	subscriptions,
	currentPodcast: joeRogan,
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
