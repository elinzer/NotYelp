import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CurrentUserReview.css";
import * as reviewActions from "../../../store/review";
import EditReviewModal from "../EditReviewModal";
import DisplayStars from "../DisplayStars";

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
      <div className="my-review">
        {filteredReviews.map((review, i) => (
          <div className="review-card-current" key={`${review.id} ${i + 1}`}>
            <div className="user-info">
              <img
                className="review-user-image-current"
                src={review?.user.profile_image}
              />
              <div className="users-name-current">
                <span>{`${user.username}`}</span>
                <span className="span-review-stars">
                  <DisplayStars rating={review.stars} />
                </span>{" "}
              </div>
            </div>

            <div className="review-current">{`Review ${i + 1}: ${
              review.review
            }`}</div>
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
