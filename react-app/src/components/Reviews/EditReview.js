import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Reviews.css";
import * as reviewActions from "../../store/review";

const EditReview = ({ business, rev, closeModal }) => {
  const { business_id } = business.rev;
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState(business.rev.stars);
  const [review, setReview] = useState(business.rev.review);
  // const [businessId, setBusinessId] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const info = {
      user_id: sessionUser.id,
      stars,
      review,
      business_id: business_id,
    };

    const data = await dispatch(
      reviewActions.editReview(info, business.rev.id)
    );
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
        <input
          className="stars-review"
          type="number"
          placeholder="Stars 1-5"
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
        disabled={rev.length <= 5}
      >
        Submit Review
      </button>
    </form>
  );
};

export default EditReview;
