import PropTypes from "prop-types";

function DivComponent({ data, className }) {
  return <p className={className}>{data}</p>;
}

DivComponent.propTypes = {
  data: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default DivComponent;
