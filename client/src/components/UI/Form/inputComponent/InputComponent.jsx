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
  classBox2,
  isRequired,
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
        className={classBox2}
        required={isRequired}
      />
    </div>
  );
}

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf([
    "text",
    "number",
    "password",
    "email",
    "checkbox",
  ]).isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleChange: PropTypes.func.isRequired,
  classBox: PropTypes.string.isRequired,
  classBox2: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

export default InputComponent;
