import PropTypes from "prop-types";

import "./DescriptionComponent.css";

function DescriptionComponent({ descriptionName, description, handleChange }) {
  return (
    <textarea
      className="textarea-form"
      name={descriptionName}
      value={description}
      onChange={handleChange}
    />
  );
}

DescriptionComponent.propTypes = {
  descriptionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionComponent;
