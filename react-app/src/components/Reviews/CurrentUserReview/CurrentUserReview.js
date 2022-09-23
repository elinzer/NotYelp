import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CurrentUserReview.css";
import * as reviewActions from "../../../store/review";
import EditReviewModal from "../EditReviewModal";
import DisplayStars from "../DisplayStars";
import ReviewCard from "../ReviewCard";

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

  if (!filteredReviews.length) {
    return (
      <div className="currentReviewContainer">
        <h2 className="MyReviewHeader">My Reviews</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          No reviews yet! Why not go let your favorite places know what you
          think?
        </div>
      </div>
    );
  } else {
    return (
      <div className="currentReviewContainer">
        <h2 className="MyReviewHeader">My Reviews</h2>
        <div className="my-review">
          <div className="my-review-inner">
            <div className="review-cards-inner-container">
              {filteredReviews.map((review, i) => (
                <div className="user-review-card">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentUserReviews;
