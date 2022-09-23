import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./Reviews.css";
import * as reviewActions from "../../store/review";

const EditReview = ({ rev, closeModal }) => {
  const business_id = rev?.business_id;
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState(rev?.stars * 20);
  const [review, setReview] = useState(rev.review);
  const [errors, setErrors] = useState([]);

  const handleRating = (rate) => {
    setStars(rate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      user_id: sessionUser.id,
      stars: stars / 20,
      review,
      business_id: rev.business_id,
    };

    const data = await dispatch(reviewActions.editReview(info, rev.id));
    if (data && data.errors) {
      setErrors(data.errors);
    } else {
      setReview("");
      setStars("");
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="input-container">
        <div className="editreview-title">Edit A Review</div>

        <Rating
          onClick={handleRating}
          ratingValue={stars}
          size={30}
          transition
          fillColor="gold"
          allowHover={false}
          emptyColor="gray"
        />

        <div className="inputItem">
          <input
            className="make-bigger"
            placeholder=" "
            value={review}
            onChange={(e) => {
              const textValue = e.target.value;
              if (textValue.length > 255) {
                return;
              }
              setReview(e.target.value);
            }}
            required
          />
          <label className="review-body">Review Description</label>
        </div>
        <button
          className="submitButton-review"
          type="submit"
          disabled={review.length <= 3}
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default EditReview;
