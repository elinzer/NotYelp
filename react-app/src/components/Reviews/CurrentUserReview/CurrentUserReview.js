import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CurrentUserReview.css";
import * as reviewActions from "../../../store/review";
import EditReviewModal from "../EditReviewModal";

const CurrentUserReviews = () => {
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => Object.values(state.reviews));

  const filteredReviews = reviews.filter(
    (review) => review.user_id === user.id
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(UserReview());
    dispatch(reviewActions.getReviews());
  }, []);

  const handleDeleteButton = (review_id) => {
    dispatch(reviewActions.deleteReviewById(review_id));
  };

  return (
    <div className="currentReviewContainer">
      <h2 className="MyReviewHeader">My Reviews</h2>
      <div className="current-review-wrap">
        {filteredReviews.map((review, i) => (
          <div className="review-card" key={`${review.id} ${i + 1}`}>
            <div className="users-name">{`${user.username}`} </div>
            <span>
              {" "}
              <i className="fa-solid fa-star"></i> {review.stars}
            </span>

            <div>{`Review ${i + 1}: ${review.review}`}</div>
            <button
              className="RevButton"
              onClick={() => handleDeleteButton(review.id)}
            >
              Delete Review
            </button>
            <EditReviewModal rev={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentUserReviews;
