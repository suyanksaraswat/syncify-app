import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'

const FriendImage = (props) => <RoundIcon source={{ uri: props.image }} />

const RoundIcon = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	border-radius: 50px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
`

export default FriendImage
