import React, { useState } from 'react';
import './RatingFilter.css';

function RatingFilter({ onChange }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    const value = parseFloat(event.target.value);
    setRating(value); // Update local state
    onChange(value); // Pass value to parent component
  };

  return (
    <div className="rating-filter-container">
      <label htmlFor="rating">Minimum Rating : &emsp;</label>
      <input
        name='rating'
        type="number"
        min={0}
        max={5}
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  )
}

export default RatingFilter;
