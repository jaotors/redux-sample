import React from 'react'
import { connect } from 'react-redux'

const increaseAction = {type: 'increase'}
const decreaseAction = {type: 'decrease'}

class Counter extends React.Component {
  render(){
    const {value, onIncreaseClick, onDecreaseClick} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    )
  }
}

export default connect(
  (state) => ({value: state.counter.count}),
  (dispatch) => ({
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  }))(Counter)
