import React from 'react'
import { Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components'

const CustomIcon = styled(MaterialCommunityIcons)`
	margin-top: ${Platform.OS === 'ios' ? 2 : 0}px;
`

const Icon = ({ color, name, size }) => (
	<CustomIcon testID="icon" color={color} name={name} size={size} />
)

export default Icon
