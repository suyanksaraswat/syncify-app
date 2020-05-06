import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Icon from '@app/components/common/Icon'
import styles from '@app/styles'

import { playOrPause } from '@app/modules/player/actions'
import PLAY_STATE from '@app/modules/player/playStateStatus'

const ButtonsWrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('22%')}px;
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const ButtonControls = (props) => {
	return (
		<ButtonsWrapper>
			<TouchableOpacity onPress={() => props.playOrPause()}>
				<Icon
					name={props.isPlaying ? 'pause-circle' : 'play-circle'}
					size={styles.metrics.getWidthFromDP('10%')}
					color={styles.colors.text}
				/>
			</TouchableOpacity>
		</ButtonsWrapper>
	)
}

export default connect(
	(state) => ({
		isPlaying: state.player.playState === PLAY_STATE.PLAYING,
	}),
	{
		playOrPause,
	}
)(ButtonControls)
