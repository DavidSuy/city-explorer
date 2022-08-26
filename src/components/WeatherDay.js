import React from "react";

class WeatherDay extends React.Component {
  render() {
    // console.log(this.props.key);
    return (
      <tr>
        <td>{this.props.weatherDay.date}</td>
        <td>{this.props.weatherDay.low}</td>
        <td>{this.props.weatherDay.high}</td>
        <td>{this.props.weatherDay.description}</td>
      </tr>
    );
  }
}

export default WeatherDay;
