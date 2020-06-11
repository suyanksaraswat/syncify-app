import React from 'react'
import { View, TextInput } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import styled from 'styled-components'

const SearchBar = ({ value, onChange, placeholder }) => {
	return (
		<Container>
			<StyledTextInput
				value={value}
				onChangeText={(text) => onChange(text)}
				placeholder={placeholder}
			/>
			<Icon name="search" size={20} />
		</Container>
	)
}

const Container = styled(View)`
	flex-direction: row;
	align-items: center;
	margin-top: ${({ theme }) => theme.metrics.getHeightFromDP('2%')}px;
	margin-bottom: ${({ theme }) => theme.metrics.getHeightFromDP('3%')}px;
`

const StyledTextInput = styled(TextInput)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('80%')}px;
	height: ${({ theme }) => theme.metrics.getHeightFromDP('5%')}px;
	border-style: solid;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.subtext};
	padding: ${({ theme }) => theme.metrics.getWidthFromDP('2%')}px;
	font-size: 18px;
`

const Icon = styled(Octicons)`
	position: absolute;
	right: ${({ theme }) => theme.metrics.getWidthFromDP('2%')}px;
`

export default SearchBar
