const countryTravelState = {
  countries: [
    {id:1, name:'South Korea', done: false, edit: false},
    {id:2, name:'Japan', done: false, edit: false},
    {id:3, name:'Canada', done: false, edit: false}
  ],
}

export default function countryTravel(state=countryTravelState, action) {
  let { countries } = state
  switch(action.type) {
    case 'ADD_COUNTRY':
      return {
        ...state,
        countries: countries.concat({id:countries.length + 1, name: action.name, done: false, edit: false})
      }
    case 'DONE_COUNTRY':
      return {
        ...state,
        countries: countries.reduce((container, country) => {
           if(country.id === action.id) {
            country.done = true
           }
           return container.concat(country)
        }, [])
      }
    case 'EDIT_COUNTRY':
      return {
        ...state,
        countries: countries.reduce((container, country) => {
          if(country.id === action.id) {
           country.edit = true
          }
          return container.concat(country)
        }, [])
      }
    case 'SAVE_COUNTRY':
      return {
        ...state,
        countries: countries.reduce((container, country) => {
          if(country.id === action.id) {
           country.name = action.name
           country.edit = false
          }
          return container.concat(country)
        }, [])
      }
    default:
      return state
  }
}