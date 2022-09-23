import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../../store/session";
import "./CurrentUserReview.css";
import * as reviewActions from "../../../store/review";
import EditReviewModal from "../EditReviewModal";
import DisplayStars from "../DisplayStars";
import ReviewCard from "../ReviewCard";

const CurrentUserReviews = () => {
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewActions.getReviews());
    dispatch(authenticate());
  }, []);

  if (!user?.review_ids.length) {
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
              {user?.review_ids.map((id, i) => (
                <div className="user-review-card">
                  <ReviewCard review={reviews[id]} />
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
