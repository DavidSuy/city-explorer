import React from "react";
import { Card, ListGroup } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    let movieCards = this.props.movieArr.map((movie, idx) => {
      return (
        <Card key={idx}>
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500/${movie.image_url}`}
          />
          <Card.Body>
            <Card.Header>{movie.title}</Card.Header>
            {/* <Card.Title>Overview</Card.Title> */}
            <Card.Text>{movie.overview}</Card.Text>
          </Card.Body>
          <ListGroup>
            <ListGroup.Item>{`Average Votes: ${movie.average_votes}`}</ListGroup.Item>
            <ListGroup.Item>{`Total Votes: ${movie.total_votes}`}</ListGroup.Item>
            <ListGroup.Item>{`Popularity: ${movie.popularity}`}</ListGroup.Item>
            <ListGroup.Item>{`Released On: ${movie.released_on}`}</ListGroup.Item>
          </ListGroup>
        </Card>
      );
    });

    return (
      <>
        <h2>Movies</h2>
        {movieCards}
      </>
    );
  }
}

export default Movie;
