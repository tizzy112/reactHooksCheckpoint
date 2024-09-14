import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Fliter";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [filter, setFilter] = React.useState({ title: "", rating: "" });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (criteria) => {
    setFilter(criteria);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(filter.title.toLowerCase());
    const ratingMatch = filter.rating
      ? movie.rating >= parseFloat(filter.rating)
      : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: "New Movie",
            description: "Description of the new movie.",
            posterURL: "https://via.placeholder.com/150",
            rating: 5,
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
};

export default App;
