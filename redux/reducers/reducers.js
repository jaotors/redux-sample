import { combineReducers } from 'redux'
import counter from './modules/counter'
import countryTravel from './modules/countryTravel'

export default combineReducers({
  counter,
  countryTravel
})