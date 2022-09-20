import React, { useState } from "react";

const DisplayStars = ({ rating }) => {
  function calculateStars(number) {
    const starArr = new Array(5);
    if (number === 5.0) {
      starArr.fill("full-star");
      return starArr;
    }
    if (number === 0.0) {
      starArr.fill("empty-star");
      return starArr;
    }
    const numberFullStars = Math.floor(rating);
    for (let i = 1; i <= numberFullStars; i++) {
      starArr.push("full-star");
    }
    const numberOfEmptyStars = 5 - numberFullStars;
    for (let i = 1; i <= numberOfEmptyStars; i++) {
      starArr.push("empty-star");
    }
    return starArr;
  }

  return (
    <div>
      {calculateStars(rating).map((star, i) => {
        switch (star) {
          case "full-star":
            return (
              <div key={i} className="full-star">
                <i className="fa-solid fa-star"></i>
              </div>
            );
          case "empty-star":
            return (
              <div key={i} className="empty-star">
                <i className="fa-regular fa-star"></i>
              </div>
            );
        }
      })}
    </div>
  );
};

export default DisplayStars;
