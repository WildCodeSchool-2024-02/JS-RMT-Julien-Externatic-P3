import { Link } from "react-router-dom";

import logoExternaticNav from "../../../assets/images/ExternaticLogoBlanc.png";
import logoAvatar from "../../../assets/icones/user-white.svg";
import logoSquare from "../../../assets/icones/square-white.svg";

import "./FrontNav.css";

function FrontNav() {
  return (
    <nav className="nav-front-container">
      <ul className="nav-front-components">
        <li className="nav-square">
          <img src={logoSquare} alt="logo carré" />
          <img src={logoSquare} alt="logo carré" />
          <img src={logoSquare} alt="logo carré" />
          <img src={logoSquare} alt="logo carré" />
        </li>
        <li>
          <Link to="/">
            <img
              className="logo-externatic"
              src={logoExternaticNav}
              alt="logo externatic"
            />
          </Link>
        </li>
        <li>
          <Link to="/candidat/:id">
            <img className="logo-avatar" src={logoAvatar} alt="logo avatar" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FrontNav;
