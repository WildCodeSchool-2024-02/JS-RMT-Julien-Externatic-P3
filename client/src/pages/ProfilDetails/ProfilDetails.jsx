import { useLoaderData } from "react-router-dom";

import ProfilElement from "../../components/ProfilElement/ProfilElement";
import avatar from "../../assets/images/icones/user.svg";
import "./ProfilDetails.css";

function ProfilDetails() {
  const oneProfil = useLoaderData();
  const titleButonsElements = [
    "Mon CV",
    "Mes favoris",
    "Mes candidatures",
    "Compétences",
  ];
  return (
    <>
      <h1 className="profil-title style-title-h1">Mon profil</h1>
      <section className="profil-header paragraph-style">
        <img src={avatar} alt={oneProfil.firstname} className="profil-avatar" />
        <article className="profil-header-name-location">
          <p>{oneProfil.firstname}</p>
          <p>{oneProfil.lastname}</p>
          <p>{oneProfil.city}</p>
        </article>
        <article className="profil-header-contact">
          <p>{oneProfil.mail}</p>
          <p>{oneProfil.phone}</p>
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
