export default class Episode {
	constructor(props) {
		this.id = props.id || ''
		this.title = props.title || ''
		this.image = props.image || ''
		this.uri = props.uri || ''
		this.artist = props.artist || ''
		this.duration = props.duration || '00:00'
		this.durationInSeconds = props.durationInSeconds || 0
	}
}
