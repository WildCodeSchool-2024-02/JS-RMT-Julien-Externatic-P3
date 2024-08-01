import PropTypes from "prop-types";

import "./H2p.css";

function H2p({ subtitle, data, cls }) {
  return (
    <>
      <h2 className={cls}>{subtitle}</h2>
      <p className="style-p">{data}</p>
    </>
  );
}

H2p.propTypes = {
  subtitle: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
};

export default H2p;