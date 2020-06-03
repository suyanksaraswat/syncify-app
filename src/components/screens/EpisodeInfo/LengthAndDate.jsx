import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import moment from 'moment'

const LengthAndDate = (props) => (
	<Metrics>
		<Metric>
			{new Date(Math.floor(props.episode.enclosure.duration) * 1000)
				.toISOString()
				.substr(11, 8)}
		</Metric>
		<Metric>
			{moment(props.episode.pubDate.substr(0, 10), 'YYYYMMDD').fromNow()}
		</Metric>
	</Metrics>
)

const Metrics = styled(View)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
`

const Metric = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
`

export default LengthAndDate
