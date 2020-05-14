import subscriptions from './data/subscriptions'
import freakonomics from './data/freakonomics'

export const initialState = {
	subscriptions,
	currentPodcast: freakonomics,
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
