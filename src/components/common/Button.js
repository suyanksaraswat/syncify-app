import React from 'react'
import { TouchableOpacity } from 'react-native'

import styled from 'styled-components'
import Icon from './Icon'

const Button = ({ onPress, name, size }) => (
	<Touchable onPress={onPress}>
		<Icon color="black" name={name} size={size} />
	</Touchable>
)

const Touchable = styled(TouchableOpacity)`
	display: flex;
	flex-direction: row;
	justify-content: center;
`

export default Button
