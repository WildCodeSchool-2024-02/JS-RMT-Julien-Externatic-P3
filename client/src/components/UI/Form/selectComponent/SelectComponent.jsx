import PropTypes, { shape } from "prop-types";

import "./SelectComponent.css";

function SelectComponent({
  id,
  label,
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
        <option value=""> lfkesjsql</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  classBox: PropTypes.string.isRequired,
};

export default SelectComponent;
