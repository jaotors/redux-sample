import { createStore } from 'redux'
import reducers from './reducers'

export default store = createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : undefined)