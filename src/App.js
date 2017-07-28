import React from 'react'
import Counter from './Counter/Counter'
import Country from './Country/Country'

class App extends React.Component {
  render(){
    return (
      <div>
        <Counter />
        <Country />
      </div>
    )
  }
}

export default App