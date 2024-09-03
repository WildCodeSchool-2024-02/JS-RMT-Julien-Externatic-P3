import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useExternatic } from "../../../context/ExternaticContext";

import connexion from "../../../services/connexion";
import ButtonComponent from "../../../components/UI/buttonComponent/ButtonComponent";
import Badge from "../../../components/UI/Badge/Badge";
import H2p from "../../../components/UI/H2p/H2p";
import Star from "../../../components/UI/buttonComponent/ButtonStar";
import Modal from "../../../components/UI/Modal/Modal";
import Candidacy from "../../../components/frontOffice/Forms/FormCandidacy/FormCandidacy";

import errorToast from "../../../components/UI/toaster/errorToast";

import iconeAward from "../../../assets/icones/award-icone.svg";
import iconeCase from "../../../assets/icones/briefcase-icone.svg";
import iconeCalendar from "../../../assets/icones/calendar-icone.svg";
import iconeClock from "../../../assets/icones/clock-icone.svg";
import iconeDollar from "../../../assets/icones/dollar-icone.svg";
import iconeFile from "../../../assets/icones/file-icone.svg";
import iconeLoc from "../../../assets/icones/localisation-icone.svg";

import "./OfferDetails.css";

function Offer() {
  const offer = useLoaderData();
  const { logedUser } = useExternatic();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const checkProfile = async () => {
    try {
      const response = await connexion.get(
        `/api/profils/${logedUser.id}/completed`
      );
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      if (error.status === 400) {
        errorToast("Merci de compléter votre profil avant de postuler.");
        return false;
      }
    }
    return false;
  };

  const handleApply = async () => {
    const isProfileComplete = await checkProfile();
    if (isProfileComplete) {
      openModal();
    }
  };

  return (
    <>
      <h1 className="style-title-h1 style-title-offer">{offer.title}</h1>
      {logedUser && logedUser.role_id === 1 && (
        <div className="apply-fav-container">
          <Star
            isFav={offer.offer_id !== null}
            cls="logo-star"
            offerId={offer.id}
          />
          <ButtonComponent
            text="Postuler"
            handleClick={handleApply}
            css="btn-apply"
          />
        </div>
      )}
      <section className="logo-container">
        <Badge
          clss="badge-offer-detail"
          src={iconeClock}
          alt="logo horloge"
          text={`Télétravail : ${offer.format}`}
        />
        <Badge
          clss="badge-offer-detail"
          src={iconeFile}
          alt="logo fichier"
          text={`Contrat : ${offer.contractName}`}
        />
        <Badge
          clss="badge-offer-detail"
          src={iconeCase}
          alt="logo valise"
          text={`Secteur : ${offer.activityAreaName}`}
        />
        <Badge
          clss="badge-offer-detail"
          src={iconeCalendar}
          alt="logo calendrier"
          text={`Prise de poste : ${offer.start_date}`}
        />
        <Badge
          clss="badge-offer-detail"
          src={iconeDollar}
          alt="logo dollar"
          text={`Salaire : ${offer.salary} € annuel brut`}
        />
        <Badge
          clss="badge-offer-detail"
          src={iconeLoc}
          alt="logo localisation"
          text={`Lieu d'activité : ${offer.city}`}
        />
        <Badge
          clss="badge-offer-detail"
          src={iconeAward}
          alt="logo medaille"
          text={`Formation : ${offer.level}`}
        />
      </section>
      <section>
        <h2 className="style-title-h1 style-title-offer">Détails de l'offre</h2>
        <article className="style-article-offer">
          <H2p
            subtitle="Présentation de la société"
            cls="style-title-h2"
            data={offer.description}
          />
        </article>
        <article className="style-article-offer">
          <H2p
            subtitle="Les Missions"
            cls="style-title-h2"
            data={offer.missions}
          />
        </article>
        <article className="style-article-offer">
          <H2p
            subtitle="Languages et Technologies"
            cls="style-title-h2"
            data={offer.technology}
          />
        </article>
        <article className="style-article-offer">
          <H2p
            subtitle="Profil"
            cls="style-title-h2"
            data={offer.profil_desc}
          />
        </article>
        <article className="style-article-offer">
          <H2p
            subtitle="Les Avantages"
            cls="style-title-h2"
            data={offer.benefits}
          />
        </article>
        {logedUser && logedUser.role_id === 1 && (
          <ButtonComponent
            text="Postuler"
            handleClick={handleApply}
            css="btn-apply-bottom"
          />
        )}
      </section>
      <ToastContainer />
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel="Postuler"
        Content={Candidacy}
        contentType="form"
        contentProps={{ closeModal }}
      />
    </>
  );
}

export default Offer;
