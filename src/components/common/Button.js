import React from 'react'
import { TouchableOpacity } from 'react-native'

import styled from 'styled-components'
import Icon from './Icon'

const Button = ({ onPress, name, size, color, testID = 'button' }) => (
	<Touchable testID={testID} onPress={onPress}>
		<Icon color={color || 'black'} name={name} size={size} />
	</Touchable>
)

const Touchable = styled(TouchableOpacity)`
	display: flex;
	flex-direction: row;
	justify-content: center;
`

export default Button
