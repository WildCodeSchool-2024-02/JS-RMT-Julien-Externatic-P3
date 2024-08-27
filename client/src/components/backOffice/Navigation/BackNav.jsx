import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logoExternaticNavBlack from "../../../assets/images/ExternaticLogoNoir.png";

import "./BackNav.css";

function BackNav({ onLinkSelect }) {
  const role = "";

  const handleLinkClick = (linkName) => {
    onLinkSelect(linkName);
  };

  return (
    <aside className="nav-back-main">
      <div className="nav-back-logo-container">
        <img
          src={logoExternaticNavBlack}
          alt="Externatic Logo"
          className="nav-logo"
        />
      </div>
      <nav className="nav-back-container">
        <ul className="nav-back-components">
          {role === "admin" ? (
            <>
              <li>
                <Link
                  to="/admin/consultants"
                  onClick={() => handleLinkClick("Consultants")}
                >
                  Consultants
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/entreprises"
                  onClick={() => handleLinkClick("Entreprises")}
                >
                  Entreprises
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/consultants/entreprises"
                  onClick={() => handleLinkClick("Entreprises")}
                >
                  Entreprises
                </Link>
              </li>
              <li>
                <Link
                  to="/consultants/offres"
                  onClick={() => handleLinkClick("Offres")}
                >
                  Offres
                </Link>
              </li>
              <li>
                <Link
                  to="/consultants/candidats"
                  onClick={() => handleLinkClick("Candidats")}
                >
                  Candidats
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}

BackNav.propTypes = {
  onLinkSelect: PropTypes.func.isRequired,
};

export default BackNav;
