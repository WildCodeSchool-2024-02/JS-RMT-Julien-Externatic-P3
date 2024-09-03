import PropTypes from "prop-types";

function ParagraphElement({ data, className }) {
  const formatData = (text) => {
    const pattern = /\d{3}Z$/;

    if (pattern.test(text)) {
      return text.split("T")[0];
    }
    return text;
  };
  return <p className={className}>{formatData(data)}</p>;
}

ParagraphElement.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string.isRequired,
};

export default ParagraphElement;
