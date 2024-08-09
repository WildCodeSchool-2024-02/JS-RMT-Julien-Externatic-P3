import { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import ButtonComponent from "../buttonComponent/ButtonComponent";

import "./Modal.css";

ReactModal.setAppElement("#root"); // cache l'arrière plan pour les lecteur d'écran

function Modal({
  isOpen,
  setIsOpen,
  contentLabel,
  Content,
  contentType,
  contentProps,
}) {
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
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
        <ButtonComponent
          text="X"
          handleClick={handleCloseRequest}
          css="close-modal"
        />
        <Content contentProps={contentProps} />
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
          <ButtonComponent
            text="Oui"
            handleClick={closeModal}
            css="alert-btn"
          />
          <ButtonComponent
            text="Non"
            handleClick={closeConfirmModal}
            css="alert-btn"
          />
        </div>
      </ReactModal>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  contentLabel: PropTypes.string.isRequired,
  Content: PropTypes.elementType.isRequired,
  contentType: PropTypes.string.isRequired,
  contentProps: PropTypes.shape().isRequired,
};

export default Modal;
