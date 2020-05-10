import { combineReducers } from 'redux'
import player from './player/reducer'
import podcasts from './podcasts/reducer'
import explore from './explore/reducer'

export default combineReducers({
	player,
	podcasts,
	explore,
})
