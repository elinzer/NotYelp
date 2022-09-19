import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Reviews.css";
import * as reviewActions from "../../store/review";

const CreateReview = ({ business }) => {
  const { id } = business.business;
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState("");
  const [review, setReview] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const info = {
      user_id: sessionUser.id,
      stars,
      review,
      business_id: id,
    };

    dispatch(reviewActions.createReview(info));

    setReview("");
    setStars("");
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        <input
          type="number"
          value={stars}
          onChange={(e) => {
            const value = e.target.value;
            if (value > 5 || value < 1) {
              return;
            }
            setStars(e.target.value);
          }}
        ></input>
      </label>
      <label className="review-body">
        <textarea
          placeholder="Write a review"
          wrap="soft"
          value={review}
          onChange={(e) => {
            const textValue = e.target.value;
            if (textValue.length > 255) {
              return;
            }
            setReview(e.target.value);
          }}
          required
        ></textarea>
      </label>
      <button type="submit" disabled={review.length <= 5}>
        Submit Review
      </button>
    </form>
  );
};

export default CreateReview;
