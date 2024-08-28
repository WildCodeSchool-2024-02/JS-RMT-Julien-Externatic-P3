/* Lien à mettre dans le dropdown user


 <Link to="/connexion" className="dropdown-link">
                    Connexion
                  </Link>
                  <Link to="/inscription" className="dropdown-link">
                    Inscription
                  </Link>
                  
*/

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
  const [isDropdonwUserOpen, setDropdownUserOpen] = useState(false);

  const toggleDropdownExplore = () =>
    setDropdownExploreOpen(!isDropdownExploreOpen);

  const toggleDropdownUser = () => setDropdownUserOpen(!isDropdonwUserOpen);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-explore")) {
      setDropdownExploreOpen(false);
    }
    if (!event.target.closest(".dropdown-user")) {
      setDropdownUserOpen(false);
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
                  <Link to="/" className="dropdown-link">
                    Acceuil
                  </Link>
                  <Link to="/offres" className="dropdown-link">
                    Toutes nos offres
                  </Link>
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
            <button
              type="button"
              className="dropdown-user"
              onClick={toggleDropdownUser}
            >
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
              {isDropdonwUserOpen && (
                <div className="dropdown-user-menu connected">
                  <Link to="/candidat/" className="dropdown-link">
                    Mon Profil
                  </Link>
                  <Link to="/candidat" className="dropdown-link">
                    Mes Favoris
                  </Link>
                  <Link to="/candidat" className="dropdown-link">
                    Mes Candidatures
                  </Link>
                  <button type="button" className="dropdown-link deconnexion">
                    Déconnexion
                  </button>
                </div>
              )}
            </button>
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
