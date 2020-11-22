import axios from "axios";
import { useState } from "react";
import MovieCardList from "./components/MovieCardList";

require("dotenv").config();

function App() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  getTopMovies(API_KEY, setMovies);

  return (
    <>
      <h1>All time Favorites</h1>
      <MovieCardList movies={movies} />
    </>
  );
}

async function getTopMovies(API_KEY, setMovies) {
  const url = "https://api.themoviedb.org/3/movie/top_rated";

  await axios
    .get(url, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: "1",
      },
    })
    .then((res) => {
      // console.log(res.data.results);
      setMovies(res.data.results);
    })
    .catch((res) => {
      return "Error";
    });
}

export default App;
