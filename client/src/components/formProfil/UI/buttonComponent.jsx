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
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

ButtonComponent.defaultProps = {
  handleClick: () => {},
  className: "",
};

export default ButtonComponent;
