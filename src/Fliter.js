import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilterChange = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="10"
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;
