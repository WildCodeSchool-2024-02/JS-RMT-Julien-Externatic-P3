import PropTypes from "prop-types";

import "./InputComponent.css";

function InputComponent({ label, inputType, inputName, inputValue, handleChange }) {
  return (
    <div className="input-profil">
      <label className="label-Input">{label}</label>
      <input type={inputType} name={inputName} value={inputValue} onChange={handleChange} />
    </div>
  );
}

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(["text", "number", "password", "email"]).isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputComponent;
