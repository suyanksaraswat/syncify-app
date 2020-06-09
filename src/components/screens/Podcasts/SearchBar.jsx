import React from 'react'
import { TextInput, View } from 'react-native'
import styled from 'styled-components'

import Button from '@app/components/common/Button'

const SearchBar = (props) => {
	const [value, onChangeText] = React.useState(null)

	return (
		<SearchWrap>
			<Search
				onChangeText={(text) => {
					onChangeText(text)
					props.filterData(text)
				}}
				value={value}
				clearTextOnFocus={true}
				placeholder="Search for podcasts"
			/>
			<Button
				onPress={() => {
					props.filterData(value)
				}}
				name="magnify"
				size={25}
				color="#4C82FC"
			/>
		</SearchWrap>
	)
}

const SearchWrap = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('90%')}px;
	height: ${({ theme }) => theme.metrics.getHeightFromDP('7%')}px;
	margin: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.colors.skyBlue};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-right: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
`

const Search = styled(TextInput)`
	padding-left: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5%')}px;
`

export default SearchBar
