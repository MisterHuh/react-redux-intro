import React, {  Component  } from "react"; // instead of React.Component
import {  connect  } from "react-redux"

class Clock extends Component {
  render() {
    console.log("Clock Props:", this.props)   // 4. and add it onto this.props

    return(
      <h1>{this.props.time}</h1>         // this.props.time is WHATEVER was set
    );                                   // from step #2
  }
}

function mapStateToProps(state) {       // 1. took info from the Redux state
  console.log("Redux State:", state);

  return {
    time: state.clock.time    // 2. created a new object
  }                           // set it to the value from the Redux state
}                             // returned the object

export default connect(mapStateToProps)(Clock);
// 3. connect() will take the object from step 2
