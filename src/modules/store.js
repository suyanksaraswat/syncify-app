import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = applyMiddleware(thunk)

const store = compose(middleware)(createStore)(reducers)

export default store
