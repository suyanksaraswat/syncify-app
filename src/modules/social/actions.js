import searchResults from './data/searchResults'

export const CONNECTIONS_SEARCH_SUCCESS = 'CONNECTIONS_SEARCH_SUCCESS'

export const search = () => async (dispatch) => {
	dispatch({ type: CONNECTIONS_SEARCH_SUCCESS, payload: searchResults })
}
