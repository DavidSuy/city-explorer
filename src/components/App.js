import React from "react";
import "../css/App.css";
import Form from "react-bootstrap/Form";
import { Button, Card, Alert } from "react-bootstrap";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: {},
      map: "",
    };
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let cityResponse = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      );

      this.setState({
        cityData: cityResponse.data[0],
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityResponse.data[0].lat},${cityResponse.data[0].lon}&zoom=12`,
      });
    } catch (error) {
      this.setState({
        error: error.message,
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

        {this.state.cityData.lat ? (
          <Card>
            <Card.Body>
              <Card.Title>{this.state.cityData.display_name}</Card.Title>
              <Card.Img src={this.state.map} />
              <Card.Text>{`Lat: ${this.state.cityData.lat}`}</Card.Text>
              <Card.Text>{`Lat: ${this.state.cityData.lon}`}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <></>
        )}
        {this.state.error ? (
          <Alert variant="danger">{this.state.error}</Alert>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default App;
