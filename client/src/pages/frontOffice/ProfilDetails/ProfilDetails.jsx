import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import avatar from "../../../assets/icones/user-black.svg";
import toggleLeft from "../../../assets/icones/toggle-left.svg";
import toggleRight from "../../../assets/icones/toggle-right.svg";
import chevronRight from "../../../assets/icones/chevron-right.svg";
import ButtonComponent from "../../../components/UI/buttonComponent/ButtonComponent";
import Modal from "../../../components/UI/Modal/Modal";
import ModifyProfil from "../../../components/frontOffice/Forms/ModifyProfil/ModifyProfil";
import ModifyCV from "../../../components/frontOffice/ModifyCV/ModifyCV";

import "./ProfilDetails.css";

function ProfilDetails() {
  const oneProfil = useLoaderData();
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const isActive = true;

  const openModif = () => {
    setIsModifyModalOpen(true);
  };
  const openCv = () => {
    setCvModalOpen(true);
  };

  return (
    <>
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
        <button
          type="button"
          className="profil-detail-link paragraph-style"
          onClick={openCv}
        >
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
        <ButtonComponent
          text="Modifier le profil"
          handleClick={openModif}
          css="button-modify-profil"
        />
      </section>
      <Modal
        isOpen={isModifyModalOpen}
        style={{
          content: {
            maxHeight: "80vh", // Limite la hauteur du contenu du modal à 80% de la hauteur de la fenêtre
            overflow: "auto", // Ajoute une barre de défilement si le contenu dépasse
          },
        }}
        setIsOpen={setIsModifyModalOpen}
        contentLabel="Formulaire de modification"
        Content={ModifyProfil}
        contentType="form"
        contentProps={{ oneProfil, setIsModifyModalOpen }}
      />
      <Modal
        isOpen={cvModalOpen}
        style={{
          content: {
            maxHeight: "80vh", // Limite la hauteur du contenu du modal à 80% de la hauteur de la fenêtre
            overflow: "auto", // Ajoute une barre de défilement si le contenu dépasse
          },
        }}
        setIsOpen={setCvModalOpen}
        contentLabel="Formulaire de modification"
        Content={ModifyCV}
        contentType="form"
        contentProps={{ oneProfil, setCvModalOpen }}
      />
    </>
  );
}

export default ProfilDetails;
