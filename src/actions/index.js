import types from "./types"

export function tick() {
  return{
    type: types.TICK,
    payload: new Date().toLocaleTimeString()
  }
}

export function setTextColor(color) {
  return {
    type: types.SET_TEXT_COLOR,
    color: color
  }
}
