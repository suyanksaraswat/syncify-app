import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styled from 'styled-components'

const EpisodeListItem = ({ title, artist, image, onPress }) => {
	return (
		<Wrapper onPress={onPress}>
			<EpisodeImage source={{ uri: image }} />
			<TextWrapper>
				<EpisodeText>{title}</EpisodeText>
				<AuthorText>{artist}</AuthorText>
			</TextWrapper>
		</Wrapper>
	)
}

const Wrapper = styled(TouchableOpacity)`
	width: 100%;
	flex-direction: row;
	align-items: center;
	padding: ${({ theme }) => theme.metrics.largeSize}px;
`

const EpisodeImage = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('24%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('24%')}px;
	border-radius: ${({ theme }) => theme.metrics.smallSize}px;
`

const TextWrapper = styled(View)`
	width: 70%;
	margin-left: ${({ theme }) => theme.metrics.mediumSize}px;
`

const AuthorText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
	color: ${({ theme }) => theme.colors.subtext};
`

const EpisodeText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
	color: ${({ theme }) => theme.colors.text};
`

export default EpisodeListItem
