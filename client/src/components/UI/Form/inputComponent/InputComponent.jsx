import { forwardRef } from "react";
import PropTypes from "prop-types";
import "./InputComponent.css";

const InputComponent = forwardRef(
  (
    {
      id,
      label,
      inputType,
      inputName,
      inputValue,
      handleChange,
      classBox,
      classBox2,
      isRequired,
    },
    ref
  ) => (
    <div className={classBox}>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        type={inputType}
        id={id}
        name={inputName}
        value={inputType === "file" ? undefined : inputValue}
        onChange={inputType === "file" ? undefined : handleChange}
        className={classBox2}
        required={isRequired}
      />
    </div>
  )
);
InputComponent.displayName = "InputComponent";

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf([
    "text",
    "number",
    "password",
    "email",
    "checkbox",
    "file",
  ]).isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  classBox: PropTypes.string.isRequired,
  classBox2: PropTypes.string,
  isRequired: PropTypes.bool,
};
InputComponent.defaultProps = {
  inputValue: "",
  handleChange: () => {},
  classBox2: "",
  isRequired: false,
};

export default InputComponent;
