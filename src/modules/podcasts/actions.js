import { PODCAST_TITLE } from '@app/modules/constants'
import freakonomics from './data/freakonomics'
import joeRogan from './data/joe-rogan'

export const selectPodcast = (podcast) => async (dispatch) => {
	if (podcast === PODCAST_TITLE.JOE_ROGAN) {
		dispatch({
			type: 'SELECT_PODCAST',
			payload: joeRogan,
		})
	} else if (podcast === PODCAST_TITLE.FREAKONOMICS) {
		dispatch({
			type: 'SELECT_PODCAST',
			payload: freakonomics,
		})
	}
}
