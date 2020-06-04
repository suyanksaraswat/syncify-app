// Scrap itunes TOP # podcasts and save in JSON to local files
const fetch = require('node-fetch')
const podcastFeedParser = require('podcast-feed-parser')
const fs = require('fs')

const path = './src/modules/podcasts/data-new/'
const numOfPodcasts = 100

async function getAndSaveJson(url, filename) {
	const podcast = await podcastFeedParser.getPodcastFromURL(url)
	fs.writeFile(path + filename, JSON.stringify(podcast), function (err) {
		if (err) {
			throw err
		}
	})
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
					const filename = `${podcast
						.replace(/[^a-z0-9]/gi, '_')
						.toLowerCase()}.json`
					getAndSaveJson(feedURL, filename)
				})
		})
	})
