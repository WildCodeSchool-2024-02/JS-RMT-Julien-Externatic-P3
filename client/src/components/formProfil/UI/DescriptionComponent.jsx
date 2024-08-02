import PropTypes from "prop-types";

import "./DescriptionComponent.css";

function DescriptionComponent({ name, value, onChange }) {
  return (
    <textarea
      className="textarea-form"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

DescriptionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DescriptionComponent;
