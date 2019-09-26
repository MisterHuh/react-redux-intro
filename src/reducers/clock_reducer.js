import types from "../actions/types"


const DEFAULT_STATE = {
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString()
}

function clockReducer(state = DEFAULT_STATE, action) {
  console.log("clock_reducer Action: ", action)
  switch(action.type) {
    case types.TICK :
        return { ...state, time: action.payload };
    default:
        return state;
  }
}

export default clockReducer;
