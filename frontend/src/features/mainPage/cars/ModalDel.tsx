import React, { useState } from 'react';
import ReactModal from 'react-modal';

function ModalDel({
  closeModal,
  isOpen,
  onHandleClickRemove,
}: {
  closeModal: () => void;
  isOpen: boolean;
  onHandleClickRemove: () => void;
}): JSX.Element {
  return (
    <div>
      <ReactModal
        className="modal-content"
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
        }}>
        <h2>Are you sure you want to delete the card?</h2>
        <button type="button" className="btn btn-danger" onClick={onHandleClickRemove}>
          Yes, delete
        </button>
      </ReactModal>
    </div>
  );
}

export default ModalDel;
