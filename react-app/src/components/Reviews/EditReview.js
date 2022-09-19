import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Reviews.css";
import * as reviewActions from "../../store/review";

const EditReview = ({ business, rev }) => {
  const { business_id } = business.rev;
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState(business.rev.stars);
  const [review, setReview] = useState(business.rev.review);
  console.log(business.rev.id)
  // const [businessId, setBusinessId] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      user_id: sessionUser.id,
      stars,
      review,
      business_id: business_id,
    };

    dispatch(reviewActions.editReview(info, business.rev.id));

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
      <button type="submit" disabled={rev.length <= 5}>
        Submit Review
      </button>
    </form>
  );
};

export default EditReview;