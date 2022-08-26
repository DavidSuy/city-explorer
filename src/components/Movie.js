import React from "react";
import { Card, ListGroup } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "400px" }}>
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500/${this.props.movie.image_url}`}
          />
          <Card.Body>
            <Card.Header>{this.props.movie.title}</Card.Header>
            {/* <Card.Title>Overview</Card.Title> */}
            <Card.Text>{this.props.movie.overview}</Card.Text>
          </Card.Body>
          <ListGroup>
            <ListGroup.Item>{`Average Votes: ${this.props.movie.average_votes}`}</ListGroup.Item>
            <ListGroup.Item>{`Total Votes: ${this.props.movie.total_votes}`}</ListGroup.Item>
            <ListGroup.Item>{`Popularity: ${this.props.movie.popularity}`}</ListGroup.Item>
            <ListGroup.Item>{`Released On: ${this.props.movie.released_on}`}</ListGroup.Item>
          </ListGroup>
        </Card>
      </>
    );
  }
}

export default Movie;
