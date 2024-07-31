import PropTypes from "prop-types";

function DivComponent({ data, className }) {
  return <div className={className}>{data}</div>;
}

DivComponent.propTypes = {
  data: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default DivComponent;
