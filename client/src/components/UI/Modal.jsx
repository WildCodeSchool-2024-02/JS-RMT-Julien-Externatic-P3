import { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

function Modal({ buttonLabel, contentLabel, Content }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        {buttonLabel}
      </button>
      <ReactModal isOpen={isOpen} contentLabel={contentLabel}>
        <button type="button" onClick={closeModal}>
          X
        </button>
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
