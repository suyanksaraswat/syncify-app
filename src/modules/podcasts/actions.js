import top100 from './top100'

export const selectPodcast = (title) => async (dispatch) => {
	const currentPodcast = top100.find(
		(podcast) => podcast.meta.title === title
	)
	dispatch({
		type: 'SELECT_PODCAST',
		payload: currentPodcast,
	})
}

export const selectEpisode = (episode) => async (dispatch) => {
	dispatch({
		type: 'SELECT_EPISODE',
		payload: episode,
	})
}

export const filterData = (input) => async (dispatch, getState) => {
	const allPodcasts = getState().podcasts.allPodcasts

	const matchesPodcast = (podcast) =>
		podcast.meta.title.toLowerCase().indexOf(input.toLowerCase()) > -1

	dispatch({
		type: 'SEARCH_PODCASTS',
		payload: {
			filteredPodcasts: allPodcasts.filter(matchesPodcast),
		},
	})
}
