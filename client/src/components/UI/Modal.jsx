import { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import "./Modal.css";

function Modal({ buttonLabel, contentLabel, Content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [closeConfirm, setCloseConfirm] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setCloseConfirm(false);
  };
  const handleCloseRequest = () => {
    if (closeConfirm) {
      closeModal();
    } else {
      setCloseConfirm(true);
    }
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        {buttonLabel}
      </button>
      <ReactModal
        isOpen={isOpen}
        contentLabel={contentLabel}
        onRequestClose={handleCloseRequest}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        shouldFocusAfterRender
      >
        <button
          className="close-modal"
          type="button"
          onClick={handleCloseRequest}
        >
          X
        </button>
        {closeConfirm && (
          <div>
            <p>Voulez-vous vraiment fermer sans sauvegarder ?</p>
            <button type="button" onClick={closeModal}>
              Oui
            </button>
            <button type="button" onClick={() => setCloseConfirm(false)}>
              Non
            </button>
          </div>
        )}
        <Content />
      </ReactModal>
    </>
  );
}

Modal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  contentLabel: PropTypes.string.isRequired,
  Content: PropTypes.elementType.isRequired,
};

export default Modal;
