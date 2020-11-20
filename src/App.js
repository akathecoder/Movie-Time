import MovieCardList from "./components/MovieCardList";

require("dotenv").config();

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return (
    <>
      <h1>All time Favorites</h1>
      <MovieCardList />
      <h1>Action Movies</h1>
      <MovieCardList />
    </>
  );
}

export default App;
