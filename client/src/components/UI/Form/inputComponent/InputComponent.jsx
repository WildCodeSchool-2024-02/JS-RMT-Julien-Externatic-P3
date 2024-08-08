import PropTypes from "prop-types";
import "./InputComponent.css";

function InputComponent({
  id,
  label,
  inputType,
  inputName,
  inputValue,
  handleChange,
  classBox,
}) {
  return (
    <div className={classBox}>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputType}
        id={id}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(["text", "number", "password", "email"])
    .isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleChange: PropTypes.func.isRequired,
  classBox: PropTypes.string.isRequired,
};

export default InputComponent;
