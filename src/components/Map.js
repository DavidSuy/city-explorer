import React from "react";
import { Card } from "react-bootstrap";

class Map extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Img src={this.props.url} />
            <Card.Text>{`Lat: ${this.props.lat}`}</Card.Text>
            <Card.Text>{`Lat: ${this.props.lon}`}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Map;
