import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-description">{description}</p>
      <p className="movie-rating">Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
