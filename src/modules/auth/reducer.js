export const initialState = {
	idToken: null,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'auth/LOGGED_IN': {
			return {
				...state,
				idToken: action.payload.idToken,
			}
		}

		case 'auth/LOGGED_OUT': {
			return {
				...state,
				idToken: action.payload.idToken,
			}
		}

		default:
			return state
	}
}
