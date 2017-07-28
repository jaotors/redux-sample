const countState = {
  count: 0
}

export default function counter(state=countState, action) {
  let {count} = state
  switch(action.type){
    case 'increase':
      return {
        ...state,
        count: count+1,
      }
    case 'decrease':
      return {
        ...state,
        count: count-1,
      }
    default:
      return state
  }
}