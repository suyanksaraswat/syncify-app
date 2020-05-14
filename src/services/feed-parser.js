import rssParser from 'react-native-rss-parser'

class FeedParser {
	async getFeed(feedUrl) {
		const res = await fetch(feedUrl, { method: 'GET' })
		const resText = await res.text()
		return rssParser.parse(resText)
	}
}

export default new FeedParser()
