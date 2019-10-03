import React, {  Component  } from "react"; // instead of React.Component
import {  connect  } from "react-redux";
import {  tick  } from "../actions"

class Clock extends Component {
  componentDidMount() {
    setInterval(this.props.tick, 1000);
  }

  render() {
    const { time, date, setTextColor } = this.props

    const style = {
      color: this.props.textColor
    }

    return(
      <div className="center my" style={style}>
        <h1>{time}</h1>
        <h2>{date}</h2>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    date: state.clock.date,
    time: state.clock.time,
    textColor: state.theme.textColor
  }
}

export default connect(mapStateToProps, {
   tick: tick,
  })(Clock);
