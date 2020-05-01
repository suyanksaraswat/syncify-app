import PLAY_STATE from '@app/modules/player/playStateStatus'

const LOADING_STRING = '... loading ...'
export const initialState = {
	playbackIstance: null,
	playbackInstanceName: LOADING_STRING,
	playbackInstancePosition: 1,
	playbackInstanceDuration: 1,
	playbackInstanceUri: '',

	playState: PLAY_STATE.STOPPED,
	volume: 1.0,
	rate: 1.0,
	muted: false,
	shouldCorrectPitch: true,
	fullscreen: false,
	currentTrack: {},
	shouldPlayAtEndOfSeek: false,

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

		case 'player/UPDATE_STATUS': {
			const status = action.payload.status
			if (status.isLoaded) {
				return {
					...state,
					playbackInstancePosition: status.positionMillis,
					playbackInstanceDuration: status.durationMillis,
					shouldPlay: status.shouldPlay,
					isPlaying: status.isPlaying,
					isBuffering: status.isBuffering,
					rate: status.rate,
					muted: status.isMuted,
					volume: status.volume,
					shouldCorrectPitch: status.shouldCorrectPitch,
				}

				// if (status.didJustFinish && !status.isLooping) {
				// 	this._advanceIndex(true)
				// 	this._updatePlaybackInstanceForIndex(true)
				// }
			}
			if (status.error) {
				// console.log(`FATAL PLAYER ERROR: ${status.error}`)
			}

			return state
		}

		case 'player/SLIDER_SEEKING_STARTED': {
			return {
				...state,
				isSeeking: true,
			}
		}

		case 'player/SLIDER_SEEKING_COMPLETE': {
			return {
				...state,
				isSeeking: false,
			}
		}

		default:
			return state
	}
}
