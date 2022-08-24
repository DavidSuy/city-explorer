import React from "react";
import "../css/App.css";
import Form from "react-bootstrap/Form";
import { Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import Weather from "./Weather";
import Map from "../components/Map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        errorState: false,
        errorMessage: "",
      },
      city: "",
      cityData: {},
      url: "",
      weather: [],
    };
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let cityUrl = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityResponse = await axios.get(cityUrl);

      let weatherUrl = `${process.env.REACT_APP_BASE_URL}/weather?lat=${cityResponse.data[0].lat}&lon=${cityResponse.data[0].lon}&searchQuery=${cityResponse.data[0].display_name}`;
      let weatherResponse = await axios.get(weatherUrl);

      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityResponse.data[0].lat},${cityResponse.data[0].lon}&zoom=12`;
      this.setState({
        cityData: cityResponse.data[0],
        url: mapUrl,
        weather: weatherResponse.data,
        error: {
          errorState: false,
        },
      });
    } catch (error) {
      this.setState({
        error: {
          errorState: true,
          errorMessage: error.message,
        },
      });
      console.log(error);
    }
  };

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        {this.state.error.errorState === true ? (
          <Alert variant="danger">{this.state.error.errorMessage}</Alert>
        ) : (
          ""
        )}
        <Form onSubmit={this.handleCitySubmit}>
          <Form.Group>
            <Form.Label>Enter City Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Seattle"
              name="city"
              onInput={this.handleCityInput}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Explore!</Button>
        </Form>

        {this.state.cityData.lat && !this.state.error.errorState ? (
          <>
            <Map
              name={this.state.cityData.display_name}
              url={this.state.url}
              lat={`Lat: ${this.state.cityData.lat}`}
              lon={`Lat: ${this.state.cityData.lon}`}
            />
            <Weather weather={this.state.weather} />
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default App;
