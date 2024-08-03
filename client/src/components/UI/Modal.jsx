import { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

function Modal({ label, Content }) {
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
        click
      </button>
      <ReactModal isOpen={isOpen} contentLabel={label}>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <Content />
      </ReactModal>
    </>
  );
}

Modal.propTypes = {
  label: PropTypes.string.isRequired,
  Content: PropTypes.elementType.isRequired,
};

export default Modal;
