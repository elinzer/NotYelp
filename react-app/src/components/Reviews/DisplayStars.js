import React, { useState } from "react";

const DisplayStars = ({ rating }) => {
  console.log(rating);
  const tempRating = (rating / 5) * 100;
  const ratingRounded = `${Math.round(tempRating / 10) * 10}%`;
  console.log(ratingRounded);
  return (
    <div className="stars-outer">
      <div className="stars-inner" style={{ width: ratingRounded }}></div>
    </div>
  );
};

export default DisplayStars;
