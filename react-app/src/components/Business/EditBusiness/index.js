import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import EditBusiness from './EditBusiness';
import "./EditBusiness.css";

function EditBusinessModal() {
  const [showModal, setShowModal] = useState(false);
  const allBusinesses = useSelector(state => state.businesses);
  useEffect(() => {
    setShowModal(false);
  }, [allBusinesses])
  return (
    <>
      <button className='editButton clear-button' onClick={() => setShowModal(true)}>
        Edit Business
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBusiness />
        </Modal>
      )}
    </>
  );
}

export default EditBusinessModal;
