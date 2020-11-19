import MovieCard from "./components/MovieCard";

require("dotenv").config();

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return (
    <MovieCard
      img="https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
      title="Avengers: Endgame"
      year="04/26/2019"
      link="https://www.themoviedb.org/movie/299534-avengers-endgame"
    />
  );
}

export default App;
