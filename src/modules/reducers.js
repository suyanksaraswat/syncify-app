import { combineReducers } from 'redux'
import player from './player/reducer'
import podcasts from './podcasts/reducer'

export default combineReducers({
	player,
	podcasts,
})
