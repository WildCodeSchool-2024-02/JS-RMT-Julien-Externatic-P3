import { Link } from "react-router-dom";

import LogoSquareBlack from "../../UI/logoSquare/LogoSquareBlack";
import LogoSquareWhite from "../../UI/logoSquare/LogoSquareWhite";
import logoExternaticNavWhite from "../../../assets/images/ExternaticLogoBlanc.png";
import logoExternaticNavBlack from "../../../assets/images/ExternaticLogoNoir.png";
import logoAvatarWhite from "../../../assets/icones/user-white.svg";
import logoAvatarBlack from "../../../assets/icones/user-black.svg";

import "./FrontNav.css";

function FrontNav() {
  return (
    <>
      <nav className="nav-front-container">
        <ul className="nav-front-components">
          <LogoSquareBlack />
          <LogoSquareWhite />
          <li>
            <Link to="/">
              <img
                className="logo-externatic-white"
                src={logoExternaticNavWhite}
                alt="logo externatic"
              />
            </Link>
          </li>
          <li>
            <Link to="/candidat/:id">
              <img
                className="logo-avatar-white"
                src={logoAvatarWhite}
                alt="logo avatar"
              />
              <img
                className="logo-avatar-black"
                src={logoAvatarBlack}
                alt="logo avatar"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <img
        className="logo-externatic-black"
        src={logoExternaticNavBlack}
        alt="logo externatic"
      />
    </>
  );
}

export default FrontNav;
