// Scrape itunes TOP # podcasts and save in JSON to local files
const fetch = require('node-fetch')
const fs = require('fs')
const podcastFeedParser = require('podcast-feed-parser')

const path = '../src/modules/podcasts'
const numOfPodcasts = 100

const podcastsIndex = []

async function getAndSaveJson(url, name) {
	const podcast = await podcastFeedParser.getPodcastFromURL(url)
	fs.writeFile(
		`${path}/data/${name}.json`,
		JSON.stringify(podcast),
		function (err) {
			if (err) {
				throw err
			}
			podcastsIndex.push(`require('./data/${name}.json')`)
		}
	)
}

fetch(
	`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppodcasts/limit=${numOfPodcasts}/json`
)
	.then((response) => response.json())
	.then((data) => {
		data.feed.entry.forEach((element) => {
			const id = element.id.attributes['im:id']
			fetch(`https://itunes.apple.com/lookup?entity=podcast&id=${id}`)
				.then((response) => response.json())
				.then((resData) => {
					const podcast = resData.results[0].collectionName
					const feedURL = resData.results[0].feedUrl
					const name = podcast
						.replace(/[^a-z0-9]/gi, '_')
						.toLowerCase()
					getAndSaveJson(feedURL, name)
				})
		})
	})

setTimeout(
	() =>
		fs.writeFile(
			`${path}/podcastList.js`,
			`/* eslint-disable global-require */
export default [${podcastsIndex}]`,
			function (err) {
				if (err) {
					throw err
				}
			}
		),
	100000
)
