import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.weatherDay.time}</td>
        <td>{this.props.weatherDay.low}</td>
        <td>{this.props.weatherDay.high}</td>
        <td>{this.props.weatherDay.forecast}</td>
      </tr>
    );
  }
}

export default WeatherDay;
