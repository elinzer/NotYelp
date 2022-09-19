import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Reviews.css";
import * as reviewActions from "../../store/review";

const CreateReview = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState("");
  const [review, setReview] = useState("");
  const [businessId, setBusinessId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      user_id: sessionUser.id,
      stars,
      review,
      business_id: businessId,
    };

    dispatch(reviewActions.createReview(info));
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        <input
          type="number"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
        ></input>
      </label>
      <label className="review-body">
        <textarea
          placeholder="Write a review"
          wrap="soft"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default CreateReview;
