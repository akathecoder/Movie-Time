import React from "react";
import "../styles/MovieCardList.css";
import MovieCard from "./MovieCard";

function MovieCardList({ movies }) {
  // console.log(movies);
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        return (
          <MovieCard
            img={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
            title={movie.original_title}
            year={movie.release_date}
            link="https://www.themoviedb.org/movie/299534-avengers-endgame"
            key={movie.id}
          />
        );
      })}
    </div>
  );
}

export default MovieCardList;
