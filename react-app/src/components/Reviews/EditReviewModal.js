import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import EditReview from "./EditReview";
import "./EditReviewModal.css";

function EditReviewModal(business, rev) {
  const [showModal, setShowModal] = useState(false);
  const allReviews = useSelector((state) => state.reviews);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="editReviewButton" onClick={() => setShowModal(true)}>
        Edit Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="modal-form">
            <EditReview rev={rev} business={business} closeModal={closeModal} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
