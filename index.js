import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

const increaseAction = {type: 'increase'}
const decreaseAction = {type: 'decrease'}
const addCountryAction = (country) => ({type: 'ADD_COUNTRY', name: country})
const doneCountryAction = (country) => ({type: 'DONE_COUNTRY', name: country})

const reducer = combineReducers({countryTravel, counter})
let store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : undefined)

function mapStateToProps(state) {
  return {
    value: state.counter.count,
    countries: state.countryTravel.countries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
    onAddCountryClick: (country) => dispatch(addCountryAction(country)),
    onDoneCountryClick: (country) => dispatch(doneCountryAction(country)),
  }
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
