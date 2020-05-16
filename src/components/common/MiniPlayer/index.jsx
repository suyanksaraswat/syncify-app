import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Icon from '@app/components/common/Icon'
import styles from '@app/styles'
import ButtonsControls from './ButtonsControls'

const MiniPlayer = (props) => (
	<Container>
		<Wrapper>
			<LeftContentWrapper
				onPress={() => props.navigation.navigate('Player')}
			>
				<EpisodeImage source={{ uri: props.currentTrack.thumbnail }} />
			</LeftContentWrapper>
			<CenterContentWrapper
				onPress={() => props.navigation.navigate('Player')}
			>
				<ButtonsControls />
			</CenterContentWrapper>
			<RightContentWrapper
				onPress={() => props.navigation.navigate('Player')}
			>
				<Icon
					name={'playlist-play'}
					size={styles.metrics.getWidthFromDP('8%')}
					color={styles.colors.text}
				/>
			</RightContentWrapper>
		</Wrapper>
		<ProgressContainer>
			<ProgressPassed flex={props.playbackInstancePosition} />
			<ProgressLeft
				flex={
					props.playbackInstanceDuration -
					props.playbackInstancePosition
				}
			/>
		</ProgressContainer>
	</Container>
)

const Container = styled(View)`
	flex-direction: column;
`

const Wrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('16%')}px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.bottomNavigatorBar};
	padding: ${({ theme }) => theme.metrics.extraSmallSize}px;
`

const EpisodeImage = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('14%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('14%')}px;
	border-radius: ${({ theme }) => theme.metrics.extraSmallSize}px;
	margin: ${({ theme }) => theme.metrics.mediumSize}px;
`

const LeftContentWrapper = styled(TouchableOpacity)`
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	flex: 1;
`

const CenterContentWrapper = styled(TouchableOpacity)`
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex: 3;
`

const RightContentWrapper = styled(TouchableOpacity)`
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	flex: 1;
`

const ProgressContainer = styled(View)`
	height: 3px;
	width: 100%;
	flex-direction: row;
`

const ProgressPassed = styled(View)`
	background-color: teal;
	flex: ${(props) => props.flex};
`

const ProgressLeft = styled(View)`
	background-color: #eae5e5;
	flex: ${(props) => props.flex};
`

export default connect(
	(state) => ({
		currentTrack: state.player.currentTrack || {},
		playbackInstancePosition: state.player.playbackInstancePosition,
		playbackInstanceDuration: state.player.playbackInstanceDuration,
	}),
	{}
)(MiniPlayer)
