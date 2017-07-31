const countryTravelState = {
  countries: [
    { name:'South Korea', done: false},
    { name:'Japan', done: false},
    { name:'Canada', done: false}
  ],
}

export default function countryTravel(state=countryTravelState, action) {
  let { countries } = state
  switch(action.type) {
    case 'ADD_COUNTRY':
      return {
        ...state,
        countries: countries.concat({name: action.name, done: false})
      }
    case 'DONE_COUNTRY':
      return {
        ...state,
        countries: countries.reduce((container, country) => {
           if(country.name === action.name) {
            country.done = true
           }
           return container.concat(country)
        }, [])
      }
    default:
      return state
  }
}