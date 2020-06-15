import podcastList from './podcastList'

export const initialState = {
	allPodcasts: podcastList,
	subscriptions: podcastList,
	currentPodcast: null,
	currentEpisode: null,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECT_PODCAST': {
			return {
				...state,
				currentPodcast: action.payload,
			}
		}
		case 'SELECT_EPISODE': {
			return {
				...state,
				currentEpisode: action.payload,
			}
		}

		case 'SEARCH_PODCASTS': {
			return {
				...state,
				subscriptions: action.payload.filteredPodcasts,
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
