import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useExternatic } from "../../../context/ExternaticContext";

import connexion from "../../../services/connexion";
import ButtonComponent from "../../../components/UI/buttonComponent/ButtonComponent";
import Badge from "../../../components/UI/Badge/Badge";
import H2p from "../../../components/UI/H2p/H2p";
import BoardList from "../../../components/backOffice/boardComponent/BoardList";
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
import iconeRss from "../../../assets/icones/rss.svg";

import "./OfferDetails.css";
import OfferForm from "../../../components/backOffice/Forms/OfferForm/OfferForm";

function Offer() {
  const { offer, candidacies } = useLoaderData();
  const { logedUser } = useExternatic();
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);
  const [isModifyModalOpen, setModifyModalOpen] = useState(false);

  const openApplyModal = () => {
    setApplyModalOpen(true);
  };

  const closeApplyModal = () => {
    setApplyModalOpen(false);
  };

  const checkProfile = async () => {
    try {
      const response = await connexion.get(
        `/api/profils/${logedUser.id}/completed`
      );

      return response.status === 200;
    } catch (error) {
      return false;
    }
  };

  const handleApply = async () => {
    const isProfileComplete = await checkProfile();
    if (isProfileComplete) {
      openApplyModal();
    } else {
      errorToast("Merci de compléter votre profil avant de postuler.");
    }
  };

  return (
    <>
      {logedUser && logedUser.role_id === 2 && (
        <ButtonComponent
          text="Modifier"
          css="modif-btn"
          handleClick={() => setModifyModalOpen(true)}
        />
      )}
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
          text={`Durée hebdomaidaire : ${offer.time}`}
        />
        <Badge
          clss="badge-offer-detail"
          src={iconeRss}
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
      {logedUser && logedUser.role_id !== 1 && (
        <section>
          <h2 className=" style-article-offer style-title-h2 ">Candidatures</h2>
          {candidacies.length > 0 ? (
            <BoardList datas={candidacies} pathFront="/consultants/candidats" />
          ) : (
            <h3 className="aucune-candidature">
              Aucune candidature actuellement
            </h3>
          )}
        </section>
      )}
      <ToastContainer />
      <Modal
        isOpen={isApplyModalOpen}
        setIsOpen={setApplyModalOpen}
        contentLabel="Postuler"
        Content={Candidacy}
        needCloseConfirm
        contentProps={{ closeApplyModal }}
      />
      <Modal
        isOpen={isModifyModalOpen}
        setIsOpen={setModifyModalOpen}
        contentLabel="Formulaire de modification d'une offre"
        Content={OfferForm}
        needCloseConfirm
        contentProps={{ setModifyModalOpen, offer }}
      />
    </>
  );
}

export default Offer;
