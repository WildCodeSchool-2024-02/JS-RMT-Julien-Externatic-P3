import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useExternatic } from "../../../context/ExternaticContext";

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
  const { logedUser } = useExternatic();

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

  const handleDropdownUser = (user) => {
    let links;
    let dynamicClassName = "dropdown-user-menu";

    if (!user) {
      links = (
        <>
          <Link to="/connexion" className="dropdown-link">
            Connexion
          </Link>
          <Link to="/inscription" className="dropdown-link">
            Inscription
          </Link>
        </>
      );
    } else if (user.role_id === 1) {
      links = (
        <>
          <Link to={`/candidat/${user.id}`} className="dropdown-link">
            Mon Profil
          </Link>
          <Link to={`/candidat/${user.id}/favoris`} className="dropdown-link">
            Mes Favoris
          </Link>
          <Link
            to={`/candidat/${user.id}/candidatures`}
            className="dropdown-link"
          >
            Mes Candidatures
          </Link>
        </>
      );
      dynamicClassName += " candidate-connected";
    } else {
      links = (
        <Link
          to={user.role_id === 2 ? "/consultant/offres" : "/admin/entreprises"}
          className="dropdown-link"
        >
          Mon espace
        </Link>
      );
    }
    return (
      <div className={dynamicClassName}>
        {links}
        {user && (
          <button type="button" className="dropdown-link deconnexion">
            Déconnexion
          </button>
        )}
      </div>
    );
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
                    Accueil
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
              {isDropdonwUserOpen && handleDropdownUser(logedUser)}
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
