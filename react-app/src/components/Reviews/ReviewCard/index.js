import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import EditReviewModal from "../EditReviewModal";
import { deleteReviewById } from "../../../store/review";
import "./ReviewCard.css";
function ReviewCard({ review }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const handleDeleteReview = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteReviewById(id, review.business_id));
  };
  return (
    <div className="review-card">
      <div className="review-user-container flex">
        <div className="review-user-image">
          <img className="review-user-image" src={review?.user.profile_image} />
        </div>
        <div className="review-user-info">
          <div className="review-username">{review?.user.username}</div>
          <div className="review-card-user-date">
            {new Date(review?.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="review-card-content">
        {/* Need better implementation*/}
        <div className="review-stars">Stars: {review?.stars}</div>
        <div className="review-text">{review?.review}</div>
        {review?.user_id == sessionUser?.id ? (
          <>
            <EditReviewModal rev={review} />
            <button onClick={(e) => handleDeleteReview(e, review?.id)}>
              Delete Review
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReviewCard;
