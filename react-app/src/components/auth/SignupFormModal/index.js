import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import SignUpForm from "./SignUpForm";
import "./SignupForm.css";
function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="signup-button button ml10"
        onClick={() => setShowModal(true)}
      >
        <div className="pr15 pl15 pb10 pt10">Sign Up</div>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
