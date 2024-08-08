import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import FrontNav from "../../../components/frontOffice/Navigation/FrontNav";
import avatar from "../../../assets/images/icones/user.svg";
import toggleLeft from "../../../assets/images/icones/toggle-left.svg";
import toggleRight from "../../../assets/images/icones/toggle-right.svg";
import chevronRight from "../../../assets/images/icones/chevron-right.svg";
import ButtonComponent from "../../../components/UI/buttonComponent/ButtonComponent";
import Modal from "../../../components/UI/Modal/Modal";
import ModifyProfil from "../../../components/frontOffice/ModifyProfil/ModifyProfil";

import "./ProfilDetails.css";

function ProfilDetails() {
  const oneProfil = useLoaderData();
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const isActive = true;

  const openModif = () => {
    setIsModifyModalOpen(true);
  };

  return (
    <>
    <FrontNav />
      <section className="profil-title-is-active">
        <h1 className="profil-title style-title-h1">Mon profil</h1>
        <button type="button" className="is-active-button">
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
        <button type="button" className="profil-detail-link paragraph-style">
          <p>Mon CV</p>
          <div>
            <img src={chevronRight} alt="chevron droite" />
          </div>
        </button>
        <button type="button" className="profil-detail-link paragraph-style">
          <p>Mes compétences</p>
          <div>
            <img src={chevronRight} alt="chevron droite" />
          </div>
        </button>
        <button type="button" className="profil-detail-link paragraph-style">
          <p>Mes favoris</p>
          <div>
            <img src={chevronRight} alt="chevron droite" />
          </div>
        </button>
        <button type="button" className="profil-detail-link paragraph-style">
          <p>Mes candidatures</p>
          <div>
            <img src={chevronRight} alt="chevron droite" />
          </div>
        </button>
        <ButtonComponent text="Modifier" handleClick={openModif} css="" />
      </section>
      <Modal
        isOpen={isModifyModalOpen}
        openFunc={setIsModifyModalOpen}
        contentLabel="Formulaire de modification"
        Content={ModifyProfil}
        contentType="form"
        contentProps={{}}
      />
    </>
  );
}

export default ProfilDetails;
