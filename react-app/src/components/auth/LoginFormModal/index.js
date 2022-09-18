import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
