import { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import "./Modal.css";

ReactModal.setAppElement("#root"); // cache l'arrière plan pour les lecteur d'écran

function Modal({ isOpen, openFunc, contentLabel, Content, contentType }) {
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);

  const closeModal = () => {
    openFunc(false);
    setConfirmIsOpen(false);
  };

  const handleCloseRequest = () => {
    if (contentType === "form") {
      setConfirmIsOpen(true);
    } else {
      closeModal();
    }
  };

  const closeConfirmModal = () => {
    setConfirmIsOpen(false);
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        contentLabel={contentLabel}
        onRequestClose={handleCloseRequest}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        shouldFocusAfterRender
        className="modal"
        overlayClassName="modal-background"
      >
        <button
          className="close-modal"
          type="button"
          onClick={handleCloseRequest}
        >
          X
        </button>
        <Content />
      </ReactModal>
      <ReactModal
        isOpen={confirmIsOpen}
        contentLabel="confirmation de fermeture"
        onRequestClose={closeConfirmModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        shouldFocusAfterRender
        className="close-alert"
        overlayClassName="modal-background"
      >
        <p className="paragraph-style">
          Voulez-vous vraiment fermer sans sauvegarder ?
        </p>
        <div className="alert-btns">
          <button type="button" onClick={closeModal}>
            Oui
          </button>
          <button type="button" onClick={closeConfirmModal}>
            Non
          </button>
        </div>
      </ReactModal>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openFunc: PropTypes.func.isRequired,
  contentLabel: PropTypes.string.isRequired,
  Content: PropTypes.elementType.isRequired,
  contentType: PropTypes.string.isRequired,
};

export default Modal;
