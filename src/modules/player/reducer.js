export const initialState = {
	playState: 'stopped',
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'player/PLAY': {
			return {
				...state,
				playState: 'playing',
			}
		}

		case 'player/PAUSE': {
			return {
				...state,
				playState: 'paused',
			}
		}

		default:
			return state
	}
}
