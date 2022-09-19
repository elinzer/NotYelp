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
      <button className="postReviewButton" onClick={() => setShowModal(true)}>
        Write Review
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
