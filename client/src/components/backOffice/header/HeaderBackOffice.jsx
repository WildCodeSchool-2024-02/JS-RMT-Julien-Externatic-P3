import PropTypes from "prop-types";

import "./HeaderBackOffice.css";

function HeaderBackOffice({ selectedLink }) {
  return <h1 className="header-back-office style-title-h1">{selectedLink}</h1>;
}

HeaderBackOffice.propTypes = {
  selectedLink: PropTypes.string.isRequired,
};

export default HeaderBackOffice;
