import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Icon from '@app/components/common/Icon'
import styles from '@app/styles'

import { playOrPause, skipSeconds } from '@app/modules/player/actions'
import { PLAY_STATE } from '@app/modules/constants'

const ButtonControls = (props) => {
	return (
		<ButtonsWrapper>
			<TouchableOpacity onPress={() => props.skipSeconds(-15)}>
				<Icon
					name={'undo'}
					size={styles.metrics.getWidthFromDP('8%')}
					color={styles.colors.text}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => props.playOrPause()}>
				<Icon
					name={props.isPlaying ? 'pause-circle' : 'play-circle'}
					size={styles.metrics.getWidthFromDP('12%')}
					color={styles.colors.text}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => props.skipSeconds(15)}>
				<Icon
					name={'redo'}
					size={styles.metrics.getWidthFromDP('8%')}
					color={styles.colors.text}
				/>
			</TouchableOpacity>
		</ButtonsWrapper>
	)
}

const ButtonsWrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('40%')}px;
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`

export default connect(
	(state) => ({
		isPlaying: state.player.playState === PLAY_STATE.PLAYING,
	}),
	{
		playOrPause,
		skipSeconds,
	}
)(ButtonControls)
