import React from 'react'
import { connect } from 'react-redux'
import action from './action'
import './Counter.css'

class Counter extends React.Component {
  render(){
    const {value, onIncreaseClick, onDecreaseClick} = this.props
    return (
      <div>
        <button onClick={onDecreaseClick}>Decrease</button>
        <span className="counter-value">{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

export default connect(
  (state) => ({value: state.counter.count}),
  (dispatch) => ({
    onIncreaseClick: () => dispatch(action.increaseAction),
    onDecreaseClick: () => dispatch(action.decreaseAction)
}))(Counter)
