import { useSelector } from "react-redux";
import "./ReviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-user-container flex">
        <div className="review-user-image">
          <img className="review-user-image" src={review.user.profile_image} />
        </div>
        <div className="review-user-info">
          <div className="review-username">{review.user.username}</div>
          <div className="review-card-user-date">
            {new Date(review.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="review-card-content">
        {/* Need better implementation*/}
        <div className="review-stars">Stars: {review.stars}</div>
        <div className="review-text">{review.review}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
