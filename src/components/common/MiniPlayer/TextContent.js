import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

const TextContent = (props) => (
	<TextContentWrapper>
		<TitleText>{props.currentTrack.title}</TitleText>
		<AuthorText numberOfLines={1}>{props.currentTrack.artist}</AuthorText>
	</TextContentWrapper>
)

const TextContentWrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('58%')}px;
	padding-horizontal: ${({ theme }) => theme.metrics.smallSize}px;
	justify-content: center;
	height: 100%;
`

const AuthorText = styled(Text)`
	color: ${({ theme }) => theme.colors.subtext};
	font-size: ${({ theme }) => theme.metrics.mediumSize * 1.2}px;
`

const TitleText = styled(Text)`
	margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
	color: ${({ theme }) => theme.colors.text};
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
`

export default connect(
	(state) => ({
		currentTrack: state.player.currentTrack || {},
	}),
	{}
)(TextContent)
