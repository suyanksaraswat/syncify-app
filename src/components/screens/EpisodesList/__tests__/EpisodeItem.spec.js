import React from 'react'
import thunk from 'redux-thunk'
import { render, fireEvent } from 'react-native-testing-library'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../../../styles'
import { initialState } from '../../../../modules/podcasts/reducer'
import EpisodeItem from '../EpisodeItem'

const mockStore = configureStore([thunk])

const podcast = {
	meta: {
		title: 'Coronavirus Daily',
		description:
			"A daily news podcast about the coronavirus pandemic, covering all dimensions of the story from science to economics and politics as well as society and culture. Hosted by Kelly McEvers from Embedded. Approximately 10 minutes in length. Publishing weekday afternoons. Includes stories and interviews from NPR's Science, International, National, Business and Washington reporting teams, as well as station reporters, and the crews at Morning Edition and All Things Considered.",
		imageURL:
			'https://media.npr.org/assets/img/2020/03/17/coronavirus_daily_final__sq-2aca96317281db7f8671e5bf24e68fb77b66bbed.png?s=1400',
		lastUpdated: '2020-05-19T22:17:00.000Z',
		link: 'https://www.npr.org/podcasts/510355/coronavirusdaily',
		language: 'en-us',
		author: 'NPR',
		summary:
			"A daily news podcast about the coronavirus pandemic, covering all dimensions of the story from science to economics and politics as well as society and culture. Hosted by Kelly McEvers from Embedded. Approximately 10 minutes in length. Publishing weekday afternoons. Includes stories and interviews from NPR's Science, International, National, Business and Washington reporting teams, as well as station reporters, and the crews at Morning Edition and All Things Considered.",
		categories: ['News'],
		owner: {
			name: 'NPR',
			email: 'podcasts@npr.org',
		},
		blocked: false,
	},
	episodes: [
		{
			title:
				"Indoor Spread, Workers' Anxieties, And Our Warped Sense Of Time ",
			description:
				'There are still a lot of questions about how the coronavirus is transmitted through air. Researchers are looking at how the virus is spread indoors and how to safely have people under one roof. <br/><br/>As states around the country lift restrictions and businesses reopen, many workers in close-contact jobs are scared for their health and would rather stay on unemployment. <a href="https://www.npr.org/2020/05/19/855936820/scared-to-return-to-work-or-cant-with-kids-at-home-here-s-what-you-need-to-know?utm_source=rss_feed_copy&utm_medium=podcast&utm_campaign=coronavirus_daily">NPR\'s Chris Arnold reports</a> on what options workers have.<br/><br/>Listen to Short Wave\'s episode about why it\'s so hard to remember what day it is and some tips for giving time more meaning on <a href="https://podcasts.apple.com/us/podcast/the-pandemic-time-warp/id1482575855?i=1000474949037">Apple Podcasts</a>, <a href="https://open.spotify.com/episode/0GMjTjV3xs5t7oAJIJSJAl">Spotify </a>and <a href="https://one.npr.org/?sharedMediaId=857247844:857623374&utm_source=rss_feed_copy&utm_medium=podcast&utm_campaign=coronavirus_daily">NPR One</a>.<br/><br/><a href="https://www.npr.org/donations/support?utm_source=coronavirusdailypod&utm_content=shownotes">Find and support your local public radio station</a><br/><br/><a href="https://www.npr.org/newsletter/the-new-normal?utm_source=rss_feed_copy&utm_medium=podcast&utm_campaign=coronavirus_daily">Sign up for \'The New Normal\' newsletter</a>',
			subtitle:
				"Some Americans being called back to work say they don't feel safe. Plus, scientists are learning more about how the coronavirus spreads indoors.",
			imageURL:
				'https://media.npr.org/assets/img/2020/05/19/gettyimages-1213973220_wide-d815a707d752c125f63807322558f5e4866c1df9.jpg?s=1400',
			pubDate: '2020-05-19T22:17:00.000Z',
			link:
				'https://www.npr.org/2020/05/19/858569583/indoor-spread-workers-anxieties-and-our-warped-sense-of-time',
			enclosure: {
				length: '11464370',
				type: 'audio/mpeg',
				url:
					'https://play.podtrac.com/npr-510355/edge1.pod.npr.org/anon.npr-podcasts/podcast/npr/covid/2020/05/20200519_covid_coronavirus_daily_51920__-_mix_gs_final-b05898ef-1259-49dc-b9d9-377ded6a47fd.mp3?awCollectionId=510355&awEpisodeId=858569583&aw_0_1st.cv=yes&orgId=1&topicId=1007&aggIds=812054919&d=718&p=510355&story=858569583&t=podcast&e=858569583&size=11464370&ft=pod&f=510355',
			},
			duration: 718,
			summary:
				"Some Americans being called back to work say they don't feel safe. Plus, scientists are learning more about how the coronavirus spreads indoors.",
			explicit: false,
		},
		{
			title: 'Encouraging Vaccine News; Pandemic Grows More Political  ',
			description:
				'A new coronavirus vaccine candidate shows encouraging results. It\'s early, but preliminary data shows it appears to be eliciting the kind of immune response capable of preventing disease. <br/><br/>Federal Reserve Chairman Jerome Powell has been signaling that more government spending might be necessary to prevent long-term economic damage. <br/><br/>As the pandemic becomes more political, researchers are concerned debates over masks, social distancing and reopening the economy are inflaming an already divided nation. Incidents of violence are rare, but concerning to experts.<br/><br/>Plus, a 102-year-old woman who survived the influenza of 1918, the Great Depression, World War II and now, COVID-19.<br/><br/><a href="https://www.npr.org/donations/support?utm_source=coronavirusdailypod&utm_content=shownotes">Find and support your local public radio station</a><br/><br/><a href="https://www.npr.org/newsletter/the-new-normal?utm_source=rss_feed_copy&utm_medium=podcast&utm_campaign=coronavirus_daily">Sign up for \'The New Normal\' newsletter</a>',
			subtitle:
				'Social scientists are concerned politicization of the coronavirus is inflaming an already divided nation. Plus, promising results from an early vaccine trial. ',
			imageURL:
				'https://media.npr.org/assets/img/2020/05/18/gettyimages-1213147461_wide-36bc5fdc5dfdf40d5b6ab8a91d690f3d2428681d.jpg?s=1400',
			pubDate: '2020-05-18T21:20:00.000Z',
			link:
				'https://www.npr.org/2020/05/18/857833174/encouraging-vaccine-news-pandemic-grows-more-political',
			enclosure: {
				length: '10534877',
				type: 'audio/mpeg',
				url:
					'https://play.podtrac.com/npr-510355/edge1.pod.npr.org/anon.npr-podcasts/podcast/npr/covid/2020/05/20200518_covid_51820-8cf49d17-da02-4ce5-9070-3489b69248d4.mp3?awCollectionId=510355&awEpisodeId=857833174&orgId=1&topicId=1006&d=659&p=510355&story=857833174&t=podcast&e=857833174&size=10534877&ft=pod&f=510355',
			},
			duration: 659,
			summary:
				'Social scientists are concerned politicization of the coronavirus is inflaming an already divided nation. Plus, promising results from an early vaccine trial. ',
			explicit: false,
		},
	],
}

describe('<EpisodesList/>', () => {
	let store
	let component
	const renderedEpisode = podcast.episodes[0]
	const mockNavigate = jest.fn()
	const mockDispatch = jest.fn()

	beforeEach(() => {
		store = mockStore({
			podcasts: {
				...initialState,
				currentEpisode: null,
			},
		})

		store.dispatch = mockDispatch

		component = render(
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<EpisodeItem
						navigation={{ navigate: mockNavigate }}
						episode={renderedEpisode}
					/>
				</ThemeProvider>
			</Provider>
		)
	})

	it('should select an episode on selection', () => {
		const { getByTestId } = component

		fireEvent.press(getByTestId('episode-item'))

		expect(mockNavigate).toHaveBeenCalledWith('Episode')
		expect(mockDispatch).toHaveBeenCalledTimes(1)
	})

	it('should start playback', () => {
		const { getByTestId } = component

		fireEvent.press(getByTestId('play-btn'))

		expect(mockNavigate).toHaveBeenCalledWith('Player')
		expect(mockDispatch).toHaveBeenCalledTimes(2)
	})
})
