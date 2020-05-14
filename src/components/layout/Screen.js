import styled from 'styled-components'
import { View } from 'react-native'

const Screen = styled(View)`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.background};
`

export default Screen
