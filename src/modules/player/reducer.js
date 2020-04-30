const LOADING_STRING = '... loading ...'

export const initialState = {
	playbackIstance: null,
	playbackInstanceName: LOADING_STRING,
	playbackInstancePosition: null,
	playbackInstanceDuration: null,

	playState: 'stopped',
	showVideo: false,
	muted: false,
	shouldPlay: false,
	isPlaying: false,
	isBuffering: false,
	isLoading: true,
	fontLoaded: false,
	shouldCorrectPitch: true,
	volume: 1.0,
	rate: 1.0,
	poster: false,
	useNativeControls: false,
	fullscreen: false,
	throughEarpiece: false,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'player/START_PLAYBACK': {
			return {
				...state,
				playbackInstance: action.payload.playbackInstance,
			}
		}

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
