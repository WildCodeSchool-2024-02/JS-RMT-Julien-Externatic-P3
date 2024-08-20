import PropTypes from "prop-types";
import "./DescriptionComponent.css";

function DescriptionComponent({
  id,
  label,
  descriptionName,
  description,
  handleChange,
  classBox,
  classBox2,
}) {
  return (
    <div className={classBox}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={descriptionName}
        value={description}
        onChange={handleChange}
        className={classBox2}
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
  classBox2: PropTypes.string.isRequired,
};

export default DescriptionComponent;
