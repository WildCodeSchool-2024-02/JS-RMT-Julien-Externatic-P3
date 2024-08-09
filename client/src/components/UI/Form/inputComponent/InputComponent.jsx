import PropTypes from "prop-types";
import "./InputComponent.css";

function InputComponent({
  id,
  label,
  inputType,
  inputName,
  inputValue,
  handleChange,
  css,
  isRequired,
}) {
  return (
    <div className="input-profil">
      <label htmlFor={id} className="label-Input">
        {label}
      </label>
      <input
        type={inputType}
        id={id}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        className={css}
        required={isRequired}
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
  css: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

export default InputComponent;
