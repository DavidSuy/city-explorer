import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    let movieCards = this.props.movieArr.map((movie, idx) => {
      return <Movie movie={movie} key={idx} />;
    });

    return (
      <>
        <h2>Movies</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {movieCards}
        </div>
      </>
    );
  }
}

export default Movies;
