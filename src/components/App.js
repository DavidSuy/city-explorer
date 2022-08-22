import React from "react";
import "../css/App.css";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: {},
    };
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let response = await axios.get(
      `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
    );
    this.setState({
      cityData: response.data[0],
    });
  };

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    console.log(this.state.cityData);
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
              <Card.Text>{`Lat: ${this.state.cityData.lat}`}</Card.Text>
              <Card.Text>{`Lat: ${this.state.cityData.lon}`}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <></>
        )}
        {/* {this.state.city} */}
        {/* {this.state.cityData.lat} */}
        {/* {this.state.cityData.lon} */}
      </>
    );
  }
}

export default App;
