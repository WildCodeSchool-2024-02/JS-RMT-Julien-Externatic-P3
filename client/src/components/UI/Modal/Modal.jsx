import { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import ConfirmModal from "./ConfirmModal/ConfirmModal";

import "./Modal.css";

ReactModal.setAppElement("#root"); // cache l'arrière plan pour les lecteur d'écran

function Modal({
  isOpen,
  setIsOpen,
  contentLabel,
  Content,
  needCloseConfirm,
  contentProps,
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setConfirmOpen(false);
  };

  const handleCloseRequest = () => {
    if (needCloseConfirm) {
      setConfirmOpen(true);
    } else {
      closeModal();
    }
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
      <ConfirmModal
        isOpen={confirmOpen}
        onConfirm={closeModal}
        onCancel={() => setConfirmOpen(false)}
        question="Voulez vous vraiment fermer ? "
      />
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  contentLabel: PropTypes.string.isRequired,
  Content: PropTypes.elementType.isRequired,
  needCloseConfirm: PropTypes.bool.isRequired,
  contentProps: PropTypes.shape().isRequired,
};

export default Modal;
