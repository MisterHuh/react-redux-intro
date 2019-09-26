import React, {  Component  } from "react"; // instead of React.Component
import {  connect  } from "react-redux";
import {  tick, setTextColor  } from "../actions"

class Clock extends Component {
  componentDidMount() {
    setInterval(this.props.tick, 1000);
  }

  render() {
    // console.log("Clock Props:", this.props)   // 4. and add it onto this.props

    const { time, date, setTextColor } = this.props

    const style = {
      color: this.props.textColor
    }
    return(
      <div style={style}>
        <h1>{time}</h1>
        <h2>{date}</h2>
        <button onClick={() => setTextColor("red")}>Red</button>
        <button onClick={() => setTextColor("green")}>Green</button>
        <button onClick={() => setTextColor("yellow")}>Yellow</button>
      </div>
      );
  }
}

function mapStateToProps(state) {       // 1. took info from the Redux state
  // console.log("Redux State:", state);
  console.log("State:", state)
  return {
    date: state.clock.date,
    time: state.clock.time,              // 2. created a new object
    textColor: state.theme.textColor    // set it to the value from the Redux state
  }                                     // returned the object
}

export default connect(mapStateToProps, {
   tick: tick,
   setTextColor: setTextColor
  })(Clock);
// 3. connect() will take the object from step 2
