import PropTypes from "prop-types";
import "./DescriptionComponent.css";

function DescriptionComponent({
  id,
  label,
  descriptionName,
  description,
  handleChange,
}) {
  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <textarea
        className="textarea-form"
        id={id}
        name={descriptionName}
        value={description}
        onChange={handleChange}
      />
    </>
  );
}

DescriptionComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  descriptionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionComponent;

