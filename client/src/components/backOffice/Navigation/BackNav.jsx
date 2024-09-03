import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useExternatic } from "../../../context/ExternaticContext";
import logoExternaticNavBlack from "../../../assets/images/ExternaticLogoNoir.png";

import "./BackNav.css";

function BackNav() {
  const { logout } = useAuth();
  const { logedUser } = useExternatic();
  const role = logedUser?.role_id;

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
          {role === 3 ? (
            <>
              <li>
                <Link to="/admin/entreprises">Entreprises</Link>
              </li>
              <li>
                <Link to="/admin/consultants">Consultants</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/consultants/offres">Offres</Link>
              </li>
              <li>
                <Link to="/consultants/entreprises">Entreprises</Link>
              </li>
              <li>
                <Link to="/consultants/candidats">Candidats</Link>
              </li>
            </>
          )}
          <li className="nav-back-last-element">
            <button
              className="nav-back-button-as-text"
              type="button"
              onClick={logout}
            >
              Déconnexion
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default BackNav;
