class ItunesApi {
	constructor() {
		this.baseUrl = 'https://itunes.apple.com/search'
	}

	async searchPodcast(term) {
		const url = `${this.baseUrl}?entity=podcast&term=${term}`

		const res = await fetch(url, {
			method: 'GET',
		})

		const resJson = await res.json()

		return resJson.results
	}
}

export default new ItunesApi()
