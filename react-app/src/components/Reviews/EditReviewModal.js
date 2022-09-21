import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import EditReview from "./EditReview";
import "./EditReviewModal.css";

function EditReviewModal(business, rev) {
  const [showModal, setShowModal] = useState(false);
  const allReviews = useSelector((state) => state.reviews);
  useEffect(() => {
    setShowModal(false);
  }, [allReviews]);
  return (
    <>
      <button className="editReviewButton" onClick={() => setShowModal(true)}>
        Edit Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReview rev={rev} business={business} />
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
