import React from 'react'
import { View, Text } from 'react-native'

import styled from 'styled-components'

import Button from '@app/components/common/Button'

const OptionsBar = () => (
	<OptionsWrapper>
		<SocialText>+2 friends liked this</SocialText>
		<Button name="dots-horizontal" size={35} />
	</OptionsWrapper>
)

const OptionsWrapper = styled(View)`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: ${({ theme }) => theme.metrics.extraLargeSize}px;
	padding-left: ${({ theme }) => theme.metrics.extraLargeSize}px;
	padding-right: ${({ theme }) => theme.metrics.extraLargeSize}px;
`

const SocialText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
	color: ${({ theme }) => theme.colors.text};
`

export default OptionsBar
