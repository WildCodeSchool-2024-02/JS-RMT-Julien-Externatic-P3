import PropTypes from "prop-types";

import "./buttonComponent.css";

function ButtonComponent({ text, handleClick, css}) {
  return (
    <button type="submit" className={`btn ${css}`} onClick={handleClick}>
      {text}
    </button>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  css: PropTypes.string.isRequired,
};

export default ButtonComponent;
