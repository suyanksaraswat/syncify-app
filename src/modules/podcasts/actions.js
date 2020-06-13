// import top100 from './top100'
import podcastList from './podcastList'

export const selectPodcast = (title) => async (dispatch) => {
	const currentPodcast = podcastList.find(
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

export const searchPodcasts = (input) => async (dispatch, getState) => {
	const allPodcasts = getState().podcasts.allPodcasts
	const lowCaseInput = input.toLowerCase()

	const matchesPodcast = (podcast) => {
		const title = podcast.meta.title.toLowerCase().indexOf(lowCaseInput)
		const author = podcast.meta.author.toLowerCase().indexOf(lowCaseInput)
		const owner = podcast.meta.owner.name
			.toLowerCase()
			.indexOf(lowCaseInput)

		return title > -1 || author > -1 || owner > -1
	}

	dispatch({
		type: 'SEARCH_PODCASTS',
		payload: {
			filteredPodcasts: allPodcasts.filter(matchesPodcast),
		},
	})
}
