// Scrape itunes TOP # podcasts and save in JSON to local files
const fetch = require('node-fetch')
const fs = require('fs')
const podcastFeedParser = require('podcast-feed-parser')
const requestedPodcasts = require('./requestedPodcasts').podcasts

const path = '../src/modules/podcasts'
const numOfPodcasts = 30

const podcastsIndex = []

const options = {
	fields: {
		meta: ['title', 'description', 'imageURL', 'author', 'categories'],
		episodes: [
			'title',
			'description',
			'subtitle',
			'imageURL',
			'pubDate',
			'enclosure',
		],
	},
	required: {
		meta: ['title', 'description'],
	},
}

async function getAndSaveJson(url, name) {
	const podcast = await podcastFeedParser.getPodcastFromURL(url, options)

	if (typeof podcast !== 'undefined') {
		fs.writeFile(
			`${path}/data/${name}.json`,
			JSON.stringify(podcast),
			(err) => {
				if (err) {
					throw err
				}
			}
		)
		podcastsIndex.push(`require('./data/${name}.json')`)
	}
}

fetch(
	`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppodcasts/limit=${numOfPodcasts}/json`
)
	.then((response) => response.json())
	.then((data) => {
		const topPodcastIds = data.feed.entry.map((element) => {
			return element.id.attributes['im:id']
		})
		const requestedPodcastIds = requestedPodcasts.map(
			(element) => element.id
		)
		return requestedPodcastIds.concat(topPodcastIds)
	})
	.then((podcastIds) => {
		podcastIds.forEach((id) =>
			fetch(`https://itunes.apple.com/lookup?entity=podcast&id=${id}`)
				.then((response) => response.json())
				.then((resData) => {
					if (typeof resData.results !== 'undefined') {
						const podcast = resData.results[0].collectionName
						const feedURL = resData.results[0].feedUrl
						const name = podcast
							.replace(/[^a-z0-9]/gi, '_')
							.toLowerCase()
						getAndSaveJson(feedURL, name)
					}
				})
		)
	})

// wait 30 seconds to ensure all transcribed then update list of podcasts file
setTimeout(
	() =>
		fs.writeFile(
			`${path}/podcastList.js`,
			`/* eslint-disable global-require */
export default [${podcastsIndex}]`,
			(err) => {
				if (err) {
					throw err
				}
			}
		),
	30000
)
