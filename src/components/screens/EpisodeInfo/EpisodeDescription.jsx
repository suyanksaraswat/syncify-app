import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Description = (props) => {
	const [expanded, setExpanded] = React.useState(false)

	return (
		<Wrapper>
			<Title>
				<TitleNameContainer>
					<DescriptionTitleText
						ellipsizeMode="tail"
						numberOfLines={1}
					>
						Desciption
					</DescriptionTitleText>
				</TitleNameContainer>

				<ExpandButton
					onPress={() =>
						expanded ? setExpanded(false) : setExpanded(true)
					}
				>
					<ButtonText>See all</ButtonText>
				</ExpandButton>
			</Title>
			{expanded ? (
				<DescriptionText>{props.episode.description}</DescriptionText>
			) : (
				<DescriptionText ellipsizeMode="tail" numberOfLines={4}>
					{props.episode.description}
				</DescriptionText>
			)}
		</Wrapper>
	)
}

const Wrapper = styled(View)`
	width: 100%;
`
const TitleNameContainer = styled(View)`
	display: flex;
	align-items: center;
`

const Title = styled(View)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
`

const ExpandButton = styled(TouchableOpacity)`
	display: flex;
	align-items: center;
`

const ButtonText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
	color: ${({ theme }) => theme.colors.redWatermelon};
	margin: ${({ theme }) => theme.metrics.mediumSize}px;
`

const DescriptionText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
	color: ${({ theme }) => theme.colors.text};
	margin: ${({ theme }) => theme.metrics.mediumSize}px;
`
const DescriptionTitleText = styled(DescriptionText)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
	font-weight: bold;
	margin: ${({ theme }) => theme.metrics.mediumSize}px;
`

export default Description
