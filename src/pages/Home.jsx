import React from "react";
import axios from "axios";
import { useState } from "react";
import MovieCardList from "../components/MovieCardList";
import "../styles/HomePage.css";

require("dotenv").config();

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  getPopularMovies(API_KEY, setPopularMovies);
  getTopRatedMovies(API_KEY, setTopRatedMovies);

  return (
    <>
      <h1>Popular</h1>
      <MovieCardList movies={popularMovies} />
      <h1>Top Rated</h1>
      <MovieCardList movies={topRatedMovies} />
    </>
  );
}

async function getPopularMovies(API_KEY, setMovies) {
  const url = "https://api.themoviedb.org/3/movie/popular";

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

async function getTopRatedMovies(API_KEY, setMovies) {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated";

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

// async function getUpcomingMovies(API_KEY, setMovies) {
//   const url = "https://api.themoviedb.org/3/movie/popular";

//   await axios
//     .get(url, {
//       params: {
//         api_key: API_KEY,
//         language: "en-US",
//         page: "1",
//       },
//     })
//     .then((res) => {
//       // console.log(res.data.results);
//       setMovies(res.data.results);
//     })
//     .catch((res) => {
//       return "Error";
//     });
// }

export default Home;
