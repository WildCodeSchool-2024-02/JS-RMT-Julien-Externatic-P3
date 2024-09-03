import ReactModal from "react-modal";
import PropTypes from "prop-types";
import ButtonComponent from "../../buttonComponent/ButtonComponent";

import "./ConfirmModal.css";

ReactModal.setAppElement("#root"); // cache l'arrière plan pour les lecteur d'écran

function ConfirmModal({ isOpen, onConfirm, onCancel, question }) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="confirmation d'action'"
      onRequestClose={onCancel}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      className="close-alert"
      overlayClassName="modal-background"
    >
      <p className="paragraph-style">{question}</p>
      <div className="alert-btns">
        <ButtonComponent text="Oui" handleClick={onConfirm} css="alert-btn" />
        <ButtonComponent text="Non" handleClick={onCancel} css="alert-btn" />
      </div>
    </ReactModal>
  );
}

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};

export default ConfirmModal;
