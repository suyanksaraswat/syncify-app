import { connect } from 'react-redux'
import { search } from '@app/modules/social/actions'
import Social from './Social'

const mapStateToProps = (state) => ({ results: state.social.results })

const mapDispatchToProps = { search }

export default connect(mapStateToProps, mapDispatchToProps)(Social)
