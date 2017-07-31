import React from 'react'
import { connect } from 'react-redux'
import action from './action'

class Country extends React.Component {
  constructor() {
    super(),
    this.state = {
      country: '"country"'
    }
    this.handleChange = this.handleChange.bind(this)
    this.addCountry = this.addCountry.bind(this)
    this.doneCountry = this.doneCountry.bind(this)
    this.editCountry = this.editCountry.bind(this)
    this.saveCountry = this.saveCountry.bind(this)
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
    this.props.onDoneCountryClick(parseInt(e.target.value))
  }

  editCountry(e) {
    this.props.onEditCountryClick(parseInt(e.target.value))
  }

  saveCountry(e) {
    if(e.target.nextSibling.value === '') {
      this.props.onSaveCountryClick(parseInt(e.target.value), e.target.nextSibling.placeholder)
    } else {
      this.props.onSaveCountryClick(parseInt(e.target.value), e.target.nextSibling.value)
    }
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
            }).map((country, index) => {
              return (
                <li key={country.id}>
                  <button value={country.id} onClick={this.doneCountry} disabled={!country.edit ? false : true}>Done</button>
                  <button value={country.id} onClick={!country.edit ? this.editCountry : this.saveCountry}>{!country.edit ? 'Edit' : 'Save'}</button>
                  {!country.edit ? country.name : <input type="text" placeholder={country.name} />}
                </li>
              )
            })}
          </ul>
          <p>List of Done Countries</p>
          <ul>
            {countries.filter(country => {
              return country.done === true
            }).map(country => {
              return <li key={country.id}>{country.name}</li>
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
    onAddCountryClick: (country) => dispatch(action.addCountryAction(country)),
    onDoneCountryClick: (id) => dispatch(action.doneCountryAction(id)),
    onEditCountryClick: (id) => dispatch(action.editCountryAction(id)),
    onSaveCountryClick: (id, country) => dispatch(action.saveCountryAction(id, country))
  })
)(Country)
