import React from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function MoviePage() {
  const { movieID } = useParams();

  return (
    <div>
      <Movie id={movieID} />
    </div>
  );
}

export default MoviePage;
