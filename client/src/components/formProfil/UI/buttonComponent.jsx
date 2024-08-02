import PropTypes from "prop-types";

import "./buttonComponent.css";

function ButtonComponent({ text, handleClick, className }) {
  return (
    <button type="submit" className={`btn ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default ButtonComponent;
