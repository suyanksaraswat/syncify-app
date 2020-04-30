import React from 'react'
import { TouchableOpacity } from 'react-native'

import styled from 'styled-components'
import Icon from './Icon'

const Touchable = styled(TouchableOpacity)`
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const Button = ({ onPress, name, size }) => (
	<Touchable onPress={onPress}>
		<Icon color="black" name={name} size={size} />
	</Touchable>
)

export default Button
