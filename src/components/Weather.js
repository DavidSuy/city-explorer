import React from "react";
import { Table } from "react-bootstrap";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    let weatherArr = this.props.weather.map((weatherDay, idx) => {
      return <WeatherDay weatherDay={weatherDay} key={idx} />;
    });

    return (
      <>
        <h2>Weather</h2>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Low Temp</th>
              <th>High Temp</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{weatherArr}</tbody>
        </Table>
      </>
    );
  }
}

export default Weather;
