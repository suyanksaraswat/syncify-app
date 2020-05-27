import { combineReducers } from 'redux'
import player from './player/reducer'
import podcasts from './podcasts/reducer'
import explore from './explore/reducer'
import auth from './auth/reducer'

export default combineReducers({
	player,
	podcasts,
	explore,
	auth,
})
