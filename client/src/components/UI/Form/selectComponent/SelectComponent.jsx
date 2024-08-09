import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import connexion from "../../../../services/connexion";

import "./SelectComponent.css";

function SelectComponent({
  url,
  id,
  label,
  defaultOpt,
  name,
  value,
  handleChange,
  classBox,
}) {
  const [options, setOptions] = useState([]);

  useEffect(
    () => async () => {
      const getOptions = async () => {
        try {
          const myOptions = await connexion.get(url);
          setOptions(myOptions.data);
        } catch (err) {
          throw new Error(err);
        }
      };
      getOptions();
    },
    [url]
  );

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
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOpt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  classBox: PropTypes.string.isRequired,
};

export default SelectComponent;
