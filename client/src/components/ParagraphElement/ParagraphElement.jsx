import PropTypes from "prop-types";

function ParagraphElement({ data, className }) {
  return <p className={className}>{data}</p>;
}

ParagraphElement.propTypes = {
  data: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ParagraphElement;
