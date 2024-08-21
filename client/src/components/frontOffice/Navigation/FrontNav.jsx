import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LogoSquareBlack from "../../UI/logoSquare/LogoSquareBlack";
import LogoSquareWhite from "../../UI/logoSquare/LogoSquareWhite";
import logoExternaticNavWhite from "../../../assets/images/ExternaticLogoBlanc.png";
import logoExternaticNavBlack from "../../../assets/images/ExternaticLogoNoir.png";
import logoAvatarWhite from "../../../assets/icones/user-white.svg";
import logoAvatarBlack from "../../../assets/icones/user-black.svg";

import "./FrontNav.css";

function FrontNav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="nav-front-container">
        <ul className="nav-front-components">
          <button className="dropdown" onClick={toggleDropdown} type="button">
            <LogoSquareBlack />
            <LogoSquareWhite />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/">Acceuil</Link>
                <Link to="/offres">Toutes nos offres</Link>
              </div>
            )}
          </button>
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
    </header>
  );
}

export default FrontNav;
