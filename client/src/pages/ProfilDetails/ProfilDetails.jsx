import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import ProfilElement from "../../components/ProfilElement/ProfilElement";
import avatar from "../../assets/images/icones/user.svg";
import toggleLeft from "../../assets/images/icones/toggle-left.svg";
import toggleRight from "../../assets/images/icones/toggle-right.svg";
import "./ProfilDetails.css";

function ProfilDetails() {
  const oneProfil = useLoaderData();
  const [isActive, setIsActive] = useState(oneProfil.isActive);
  const titleButonsElements = [
    "Mon CV",
    "Mes favoris",
    "Mes candidatures",
    "Compétences",
  ];
  const handleProfilStatus = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
      <section className="profil-title-is-active">
        <h1 className="profil-title style-title-h1">Mon profil</h1>
        <button
          type="button"
          onClick={handleProfilStatus}
          className="is-active-button"
        >
          <img
            src={isActive ? toggleRight : toggleLeft}
            alt={isActive ? "Actif" : "Inactif"}
          />
          {isActive ? "Actif" : "Inactif"}
        </button>
      </section>
      <section className="profil-header paragraph-style">
        <img src={avatar} alt={oneProfil.firstname} className="profil-avatar" />
        <p>{oneProfil.mail}</p>
        <p>{oneProfil.phone}</p>
        <article className="profil-header-contact">
          <p>
            {oneProfil.firstname} {oneProfil.lastname}
          </p>
          <p>{oneProfil.city}</p>
        </article>
        <article className="profil-header-description">
          <p>{oneProfil.description}</p>
        </article>
      </section>
      <section className="buttons-profil">
        {titleButonsElements.map((title) => (
          <ProfilElement key={title} title={title} />
        ))}
      </section>
    </>
  );
}

export default ProfilDetails;
