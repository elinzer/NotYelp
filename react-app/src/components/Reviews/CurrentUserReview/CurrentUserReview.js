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

  return (
    <div className="currentReviewContainer">
      <h2 className="MyReviewHeader">My Reviews</h2>
      <div className="my-review">
        <div className="my-review-inner">
          {filteredReviews.map((review, i) => (
            <ReviewCard review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentUserReviews;
