import { useLoaderData } from "react-router-dom";

import avatar from "../../assets/images/avatar.png";
import "./ProfilDetails.css";

function ProfilDetails() {
  const oneProfil = useLoaderData();

  return (
    <>
      <h1 className="profil-title">Mon profil</h1>
      <section className="profil-header">
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
    </>
  );
}

export default ProfilDetails;
