import PropTypes, { shape } from "prop-types";

import "./SelectComponent.css";

function SelectComponent({
  id,
  label,
  defaultOpt,
  name,
  value,
  options,
  handleChange,
  classBox,
}) {
  return (
    <div className={classBox}>
      <label htmlFor={id}> {label} </label>
      <select name={name} id={id} value={value} onChange={handleChange}>
        <option value="">{defaultOpt}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOpt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  classBox: PropTypes.string.isRequired,
};

export default SelectComponent;
