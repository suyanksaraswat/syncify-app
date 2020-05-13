import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components'

const PodcastItem = ({ image, onPress }) => {
	return (
		<Wrapper onPress={onPress}>
			<EpisodeImage source={{ uri: image }} />
		</Wrapper>
	)
}

const Wrapper = styled(TouchableOpacity)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('24%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('24%')}px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.colors.background};
`

const EpisodeImage = styled(Image)`
	width: 100%;
	height: 100%;
`

export default PodcastItem
