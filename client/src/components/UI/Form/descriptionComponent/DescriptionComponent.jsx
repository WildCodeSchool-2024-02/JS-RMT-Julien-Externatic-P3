import PropTypes from "prop-types";
import "./DescriptionComponent.css";

function DescriptionComponent({
  id,
  label,
  descriptionName,
  description,
  handleChange,
  classBox,
}) {
  return (
    <div className={classBox}>
      <label htmlFor={id}>{label}</label>
      <textarea
        className="textarea-form"
        id={id}
        name={descriptionName}
        value={description}
        onChange={handleChange}
      />
    </div>
  );
}

DescriptionComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  descriptionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  classBox: PropTypes.string.isRequired,
};

export default DescriptionComponent;
