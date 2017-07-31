import React from 'react'
import { connect } from 'react-redux'

const addCountryAction = (country) => ({type: 'ADD_COUNTRY', name: country})
const doneCountryAction = (country) => ({type: 'DONE_COUNTRY', name: country})

class Country extends React.Component {
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
    const {countries} = this.props
    return (
      <div>
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
              return <li key={country.name}>{country.name}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({ countries: state.countryTravel.countries }),
  (dispatch) => ({
    onAddCountryClick: (country) => dispatch(addCountryAction(country)),
    onDoneCountryClick: (country) => dispatch(doneCountryAction(country))
  }))(Country)