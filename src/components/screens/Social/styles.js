import { View, Text } from 'react-native'
import styled from 'styled-components'

export const HeaderBox = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	padding: ${({ theme }) => theme.metrics.largeSize}px;
	display: flex;
	justify-content: center;
`
export const HeaderText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6.5%')}px;
	color: ${({ theme }) => theme.colors.skyBlue};
	flex: 1;
`
