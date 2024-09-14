import React from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";

const MovieDetails = () => {
  const { title } = useParams();
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="movie-details">
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <div className="trailer">
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
