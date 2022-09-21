import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../context/Modal";
import CreateBusiness from "./CreateBusiness";
import "./CreateBusiness.css";

function CreateBusinessModal() {
  const [showModal, setShowModal] = useState(false);
  const allBusinesses = useSelector((state) => state.businesses);
  useEffect(() => {
    setShowModal(false);
  }, [allBusinesses]);
  return (
    <>
      <div className="createBox">
        <button className="createButton" onClick={() => setShowModal(true)}>
          Create Business
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="modal-form">
            <CreateBusiness />
          </div>
        </Modal>
      )}
    </>
  );
}

export default CreateBusinessModal;
