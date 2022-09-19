import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import CreateReview from "./CreateReview";

function CreateReviewModal({ business }) {
  const [showModal, setShowModal] = useState(false);
  const allReviews = useSelector((state) => state.reviews);
  useEffect(() => {
    setShowModal(false);
  }, [allReviews]);
  return (
    <>
      <button
        className="postReviewButton create-review-button flex center"
        onClick={() => setShowModal(true)}
      >
        <div className="review-button-star">✰</div>
        <div className="review-button-text">Write a Review</div>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReview business={business} />
        </Modal>
      )}
    </>
  );
}

export default CreateReviewModal;
