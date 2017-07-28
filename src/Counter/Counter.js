import React from 'react'
import { connect } from 'react-redux'


class Counter extends React.Component {
  render(){
    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    )
  }
}

export default Counter