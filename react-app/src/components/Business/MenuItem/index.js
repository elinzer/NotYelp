import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../context/Modal";
import CreateItem from "./CreateItem";
import "./CreateItem.css";

function CreateItemModal({ businessId }) {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="addMenuButton clear-button" onClick={() => setShowModal(true)}>
        Add Menu Item
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateItem businessId={businessId} hideModal={hideModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateItemModal;
