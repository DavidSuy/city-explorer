import React from "react";
import { Card, Table } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    let weatherArr = this.props.weather.map((weatherDay, idx) => {
      let lowTemp = weatherDay.description.split(" ")[2].slice(0, -1);
      let highTemp = weatherDay.description.split(" ")[5];

      return (
        <tr key={idx}>
          <td>{weatherDay.date}</td>
          <td>{lowTemp}</td>
          <td>{highTemp}</td>
        </tr>
      );
    });

    return (
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Low Temp</th>
            <th>High Temp</th>
          </tr>
        </thead>
        <tbody>{weatherArr}</tbody>
      </Table>
    );
  }
}

export default Weather;
