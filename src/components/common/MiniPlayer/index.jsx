import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

import ButtonsControls from './ButtonsControls'
import TextContent from './TextContent'

const MiniPlayer = (props) => (
	<Container>
		<Wrapper testID="mini-player">
			<LeftContentWrapper
				onPress={() => props.navigation.navigate('Player')}
			>
				<EpisodeImage source={{ uri: props.currentTrack.image }} />
				<TextContent />
			</LeftContentWrapper>
			<ButtonsControls />
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
	width: 100%;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('18%')}px;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	padding-vertical: ${({ theme }) => theme.metrics.smallSize}px;
	background-color: ${({ theme }) => theme.colors.bottomNavigatorBar};
`

const EpisodeImage = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('14%')}px;
	height: 100%;
	border-radius: ${({ theme }) => theme.metrics.extraSmallSize}px;
`

const LeftContentWrapper = styled(TouchableOpacity)`
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const ProgressContainer = styled(View)`
	height: 2px;
	width: 90%;
	margin: 10px;
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
