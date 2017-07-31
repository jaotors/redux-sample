import { createStore } from 'redux'
import reducers from './reducers/reducers'

export default createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : undefined)