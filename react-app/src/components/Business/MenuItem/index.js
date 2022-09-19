import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from '../../../context/Modal';
import CreateItem from "./CreateItem";
import "./CreateItem.css";

function CreateItemModal() {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="createButton" onClick={() => setShowModal(true)}>
        Add Menu Item
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateItem hideModal={hideModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateItemModal;
