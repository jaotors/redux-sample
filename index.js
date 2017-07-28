import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends React.Component {
  constructor() {
    super(),
    this.state = {
      country: '"country"'
    }
    this.handleChange = this.handleChange.bind(this)
    this.addCountry = this.addCountry.bind(this)
    this.doneCountry = this.doneCountry.bind(this)
  }

  handleChange(e) {
    const value = (e.target.value === '') ? '"country"' : e.target.value
    this.setState({
      country: value
    })
  }

  addCountry() {
    if(this.state.country !== '"country"') this.props.onAddCountryClick(this.state.country)
  }

  doneCountry(e) {
    this.props.onDoneCountryClick(e.target.value)
  }

  render(){
    const {
      value,
      countries,
      onIncreaseClick,
      onDecreaseClick
    } = this.props

    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
        <div>
          <p><input type="text" onChange={this.handleChange} /><button onClick={this.addCountry}>Add</button></p>
          <p>I want to travel in <strong>{this.state.country}</strong></p>
          <p>List of Countries that I want to travel</p>
          <ul>
            {countries.filter(country => {
              return country.done === false
            }).map(country => {
              return <li key={country.name}><button value={country.name}>Edit</button><button value={country.name} onClick={this.doneCountry}>Done</button> {country.name}</li>
            })}
          </ul>
          <p>List of Done Countries</p>
          <ul>
            {countries.filter(country => {
              return country.done === true
            }).map(country => {
              return <li key={country.name}><button value={country.name}>Edit</button><button value={country.name} onClick={this.doneCountry}>Done</button> {country.name}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

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
