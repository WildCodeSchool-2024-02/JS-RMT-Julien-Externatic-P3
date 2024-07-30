import PropTypes from "prop-types";

function H2p({ subtitle, data }) {
  return (
    <>
      <h2 className="styleTitleH2">{subtitle}</h2>
      <p>{data}</p>
    </>
  );
}

H2p.propTypes = {
  subtitle: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default H2p;
