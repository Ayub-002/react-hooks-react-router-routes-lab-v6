import React from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Detail</h1>
      <p>Showing details for movie ID: {id}</p>
    </div>
  );
}

export default Movie;
