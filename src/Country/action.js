const action = {
  addCountryAction: (country) => ({type: 'ADD_COUNTRY', name: country}),
  doneCountryAction: (id) => ({type: 'DONE_COUNTRY', id: id}),
  editCountryAction: (id) => ({type: 'EDIT_COUNTRY', id: id}),
  saveCountryAction: (id, country) => ({type: 'SAVE_COUNTRY', id: id, name: country})
}

export default action