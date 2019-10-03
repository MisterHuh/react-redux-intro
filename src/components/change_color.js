import React from "react";
import { connect } from "react-redux"
import { setTextColor } from "../actions"

const ChangeColor = ({ className = "", color = "grey", setTextColor, text = "Change Color"}) => {
  return <button
    className={className}
    onClick={() => setTextColor(color)}
  >
    {text}
  </button>
}

export default connect(null, {
  setTextColor: setTextColor
})(ChangeColor);
