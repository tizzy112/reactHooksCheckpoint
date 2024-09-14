import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <Link to={`/movie/${title}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
