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
  const [isDropdownExploreOpen, setDropdownExploreOpen] = useState(false);

  const toggleDropdownExplore = () =>
    setDropdownExploreOpen(!isDropdownExploreOpen);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-explore")) {
      setDropdownExploreOpen(false);
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
          <li>
            <button
              className="dropdown-explore"
              onClick={toggleDropdownExplore}
              type="button"
            >
              <LogoSquareBlack />
              <LogoSquareWhite />
              {isDropdownExploreOpen && (
                <div className="dropdown-explore-menu">
                  <Link to="/">Acceuil</Link>
                  <Link to="/offres">Toutes nos offres</Link>
                </div>
              )}
            </button>
          </li>
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
      <Link to="/">
        <img
          className="logo-externatic-black"
          src={logoExternaticNavBlack}
          alt="logo externatic"
        />
      </Link>
    </header>
  );
}

export default FrontNav;
