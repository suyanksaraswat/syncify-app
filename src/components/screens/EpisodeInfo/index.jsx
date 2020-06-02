import React from 'react'
import { connect } from 'react-redux'
import Episode from './EpisodeScreen'

const EpisodeContainer = () => <Episode />

export default connect(() => ({}), {})(EpisodeContainer)
