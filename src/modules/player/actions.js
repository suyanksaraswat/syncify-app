import { Audio } from 'expo-av'
import { PLAY_STATE } from '@app/modules/constants'

const usePlaybackInstance = (getState) => {
	return getState().player.playbackInstance
}

export const startPlayback = (item) => async (dispatch, getState) => {
	dispatch({
		type: 'player/START_PLAYBACK_LOADING',
		payload: {
			currentTrack: item,
		},
	})

	const state = getState().player

	let playbackInstance = usePlaybackInstance(getState)
	if (playbackInstance != null) {
		await playbackInstance.unloadAsync()
		playbackInstance = null
	}

	const source = { uri: item.enclosure.url }
	const initialStatus = {
		shouldPlay: true,
		rate: state.rate,
		shouldCorrectPitch: state.shouldCorrectPitch,
		volume: state.volume,
		isMuted: state.muted,
	}

	const { sound } = await Audio.Sound.createAsync(
		source,
		initialStatus,
		(status) => dispatch(updateStatus(status))
	)

	dispatch({
		type: 'player/START_PLAYBACK_SUCCEEDED',
		payload: {
			playbackInstance: sound,
			currentTrack: item,
			playbackInstancePosition: 0,
		},
	})
}

export const playOrPause = () => async (dispatch, getState) => {
	const playState = getState().player.playState
	if (playState === PLAY_STATE.PLAYING) {
		dispatch(pause())
	} else {
		dispatch(play())
	}
}

export const play = () => async (dispatch, getState) => {
	const playbackInstance = usePlaybackInstance(getState)
	if (playbackInstance != null) {
		playbackInstance.playAsync()
	}

	dispatch({ type: 'player/PLAY', payload: {} })
}

export const pause = () => async (dispatch, getState) => {
	const playbackInstance = usePlaybackInstance(getState)
	if (playbackInstance != null) {
		playbackInstance.pauseAsync()
	}

	dispatch({ type: 'player/PAUSE', payload: {} })
}

export const stop = () => async (dispatch, getState) => {
	const playbackInstance = usePlaybackInstance(getState)
	if (playbackInstance != null) {
		playbackInstance.stopAsync()
	}

	dispatch({ type: 'player/STOP', payload: {} })
}

export const updateStatus = (status) => async (dispatch) =>
	dispatch({ type: 'player/UPDATE_STATUS', payload: { status } })

export const seekSliderValueChange = () => async (dispatch, getState) => {
	const playbackInstance = usePlaybackInstance(getState)
	if (playbackInstance != null && !getState().player.isSeeking) {
		dispatch({ type: 'player/SLIDER_SEEKING_STARTED', payload: {} })
		playbackInstance.pauseAsync()
	}
}

export const seekSliderSlidingComplete = (value) => async (
	dispatch,
	getState
) => {
	const playbackInstance = usePlaybackInstance(getState)

	if (playbackInstance != null) {
		const seekPosition = value * getState().player.playbackInstanceDuration
		playbackInstance.playFromPositionAsync(seekPosition)
	}

	dispatch({ type: 'player/SLIDER_SEEKING_COMPLETE', payload: {} })
}

export const skipSeconds = (secs) => async (dispatch, getState) => {
	const playbackInstance = usePlaybackInstance(getState)
	if (playbackInstance != null) {
		const skipPosition =
			getState().player.playbackInstancePosition + secs * 1000
		playbackInstance.setPositionAsync(skipPosition)
	}
}

// FOR REFERENCE BELOW

// const _onSeekSliderValueChange = (value) => {
// 	if (this.playbackInstance != null && !this.isSeeking) {
// 		this.isSeeking = true
// 		this.shouldPlayAtEndOfSeek = this.state.shouldPlay
// 		this.playbackInstance.pauseAsync()
// 	}
// }
//
// const _onSeekSliderSlidingComplete = async (value) => {
// 	if (this.playbackInstance != null) {
// 		this.isSeeking = false
// 		const seekPosition = value * this.state.playbackInstanceDuration
// 		if (this.shouldPlayAtEndOfSeek) {
// 			this.playbackInstance.playFromPositionAsync(seekPosition)
// 		} else {
// 			this.playbackInstance.setPositionAsync(seekPosition)
// 		}
// 	}
// }

// const _getSeekSliderPosition = () => {
// 	if (
// 		this.playbackInstance != null &&
// 		this.state.playbackInstancePosition != null &&
// 		this.state.playbackInstanceDuration != null
// 	) {
// 		return (
// 			this.state.playbackInstancePosition /
// 			this.state.playbackInstanceDuration
// 		)
// 	}
// 	return 0
// }

// const _onBackPressed = () => {
// 	if (this.playbackInstance != null) {
// 		this._advanceIndex(false)
// 		this._updatePlaybackInstanceForIndex(this.state.shouldPlay)
// 	}
// }

// const _onMutePressed = () => {
// 	if (this.playbackInstance != null) {
// 		this.playbackInstance.setIsMutedAsync(!this.state.muted)
// 	}
// }

// const _onLoopPressed = () => {
// 	if (this.playbackInstance != null) {
// 		this.playbackInstance.setIsLoopingAsync(
// 			this.state.loopingType !== LOOPING_TYPE_ONE
// 		)
// 	}
// }

// const _onVolumeSliderValueChange = (value) => {
// 	if (this.playbackInstance != null) {
// 		this.playbackInstance.setVolumeAsync(value)
// 	}
// }

// const _onForwardPressed = () => {
// 	if (this.playbackInstance != null) {
// 		this._advanceIndex(true)
// 		this._updatePlaybackInstanceForIndex(this.state.shouldPlay)
// 	}
// }

// const _trySetRate = async (rate, shouldCorrectPitch) => {
// 	if (this.playbackInstance != null) {
// 		try {
// 			await this.playbackInstance.setRateAsync(rate, shouldCorrectPitch)
// 		} catch (error) {
// 			// Rate changing could not be performed, possibly because the client's Android API is too old.
// 		}
// 	}
// }

// const _onRateSliderSlidingComplete = async (value) => {
// 	this._trySetRate(value * RATE_SCALE, this.state.shouldCorrectPitch)
// }

// const _onPitchCorrectionPressed = async (value) => {
// 	this._trySetRate(this.state.rate, !this.state.shouldCorrectPitch)
// }

// const _getMMSSFromMillis = (millis) => {
// 	const totalSeconds = millis / 1000
// 	const seconds = Math.floor(totalSeconds % 60)
// 	const minutes = Math.floor(totalSeconds / 60)

// 	const padWithZero = (number) => {
// 		const string = number.toString()
// 		if (number < 10) {
// 			return '0' + string
// 		}
// 		return string
// 	}
// 	return padWithZero(minutes) + ':' + padWithZero(seconds)
// }

// const _getTimestamp = () => {
// 	if (
// 		this.playbackInstance != null &&
// 		this.state.playbackInstancePosition != null &&
// 		this.state.playbackInstanceDuration != null
// 	) {
// 		return `${this._getMMSSFromMillis(
// 			this.state.playbackInstancePosition
// 		)} / ${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`
// 	}
// 	return ''
// }

// const _onPosterPressed = () => {
// 	this.setState({ poster: !this.state.poster })
// }

// const _onUseNativeControlsPressed = () => {
// 	this.setState({ useNativeControls: !this.state.useNativeControls })
// }

// const _onFullscreenPressed = () => {
// 	try {
// 		this._video.presentFullscreenPlayer()
// 	} catch (error) {
// 		console.log(error.toString())
// 	}
// }

// const _onSpeakerPressed = () => {
// 	this.setState(
// 		(state) => {
// 			return { throughEarpiece: !state.throughEarpiece }
// 		},
// 		({ throughEarpiece }) =>
// 			Audio.setAudioModeAsync({
// 				allowsRecordingIOS: false,
// 				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
// 				playsInSilentModeIOS: true,
// 				shouldDuckAndroid: true,
// 				interruptionModeAndroid:
// 					Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
// 				playThroughEarpieceAndroid: throughEarpiece,
// 			})
// 	)
// }
