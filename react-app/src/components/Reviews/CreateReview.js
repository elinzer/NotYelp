import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./Reviews.css";
import * as reviewActions from "../../store/review";

const CreateReview = ({ business, closeModal }) => {
  const id = business.id;
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState(20);
  const [review, setReview] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleRating = (rate) => {
    setStars(rate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const info = {
      user_id: sessionUser.id,
      stars: stars / 20,
      review,
      business_id: id,
    };

    const data = await dispatch(reviewActions.createReview(info));
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
      <div className="editreview-title">Write A Review</div>
      <label>
        <Rating
          onClick={handleRating}
          ratingValue={stars}
          size={30}
          transition
          fillColor="gold"
          allowHover={false}
          emptyColor="gray"
          initialValue={stars}
        />
      </label>
      <label className="review-body">
        <input
          className="make-bigger"
          placeholder="Write a review"
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
      </label>
      <button
        className="submitButton-review"
        type="submit"
        disabled={review.length <= 5}
      >
        Submit Review
      </button>
    </form>
  );
};

export default CreateReview;
