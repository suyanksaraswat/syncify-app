import PLAY_STATE from '@app/modules/player/playStateStatus'

const LOADING_STRING = '... loading ...'
export const initialState = {
	playbackIstance: null,
	playbackInstanceName: LOADING_STRING,
	playbackInstancePosition: null,
	playbackInstanceDuration: null,
	playbackInstanceUri: '',

	playState: PLAY_STATE.STOPPED,
	volume: 1.0,
	rate: 1.0,
	muted: false,
	shouldCorrectPitch: true,
	fullscreen: false,
	currentTrack: {},

	showVideo: false,
	isBuffering: false,
	isLoading: true,
	poster: false,
	useNativeControls: false,
	throughEarpiece: false,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'player/START_PLAYBACK_LOADING': {
			return {
				...state,
				currentTrack: action.payload.currentTrack,
			}
		}

		case 'player/START_PLAYBACK_SUCCEEDED': {
			return {
				...state,
				playbackInstance: action.payload.playbackInstance,
				playbackInstanceUri: action.payload.uri,
				playState: PLAY_STATE.PLAYING,
				currentTrack: action.payload.currentTrack,
			}
		}

		case 'player/PLAY': {
			return {
				...state,
				playState: PLAY_STATE.PLAYING,
			}
		}

		case 'player/PAUSE': {
			return {
				...state,
				playState: PLAY_STATE.PAUSED,
			}
		}

		default:
			return state
	}
}
