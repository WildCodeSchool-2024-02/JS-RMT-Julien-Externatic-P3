import { Link } from "react-router-dom";
import logoExternaticNavBlack from "../../../assets/images/ExternaticLogoNoir.png";
import "./BackNav.css";

function BackNav() {
  const role = ""

  return (
    <div className="nav-back-main">
      <div className="nav-back-logo-container">
        <img src={logoExternaticNavBlack} alt="Externatic Logo" className="nav-logo" />
      </div>
      <nav className="nav-back-container">
        <ul className="nav-back-components">
          {role === "admin" ? (
            <>
              <li>
                <Link to="/admin/consultants">Consultants</Link>
              </li>
              <li>
                <Link to="/admin/entreprises">Entreprises</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/consultants/entreprises">Entreprises</Link>
              </li>
              <li>
                <Link to="/consultants/offres">Offres</Link>
              </li>
              <li>
                <Link to="/consultants/candidats">Candidats</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default BackNav;
