import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Filter from "./Fliter";
import { initialMovies } from "./MovieData";
import "./App.css";

const App = () => {
  const [movies, setMovies] = React.useState(initialMovies);
  const [filter, setFilter] = React.useState({ title: "", rating: "" });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    localStorage.setItem("movies", JSON.stringify([...movies, newMovie])); // Save to localStorage
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
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movie/:title" element={<MovieDetails />} />
      </Routes>
      <button
        onClick={() =>
          addMovie({
            title: "New Movie",
            description: "Description of the new movie.",
            posterURL: "https://via.placeholder.com/150",
            rating: 5,
            trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example trailer link
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
};

export default App;
