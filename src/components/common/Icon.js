import React from 'react'
import { Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components'

const Icon = ({ color, name, size }) => (
	<CustomIcon testID="icon" color={color} name={name} size={size} />
)

const CustomIcon = styled(MaterialCommunityIcons)`
	margin-top: ${Platform.OS === 'ios' ? 2 : 0}px;
`

export default Icon
