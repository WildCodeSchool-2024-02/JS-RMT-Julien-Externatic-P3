import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useExternatic } from "../../../context/ExternaticContext";

import Badge from "../../../components/UI/Badge/Badge";
import H2p from "../../../components/UI/H2p/H2p";
import BoardList from "../../../components/backOffice/boardComponent/BoardList";
import Star from "../../../components/UI/buttonComponent/ButtonStar";


import iconeAward from "../../../assets/icones/award-icone.svg";
import iconeCase from "../../../assets/icones/briefcase-icone.svg";
import iconeCalendar from "../../../assets/icones/calendar-icone.svg";
import iconeClock from "../../../assets/icones/clock-icone.svg";
import iconeDollar from "../../../assets/icones/dollar-icone.svg";
import iconeFile from "../../../assets/icones/file-icone.svg";
import iconeLoc from "../../../assets/icones/localisation-icone.svg";

import "./OfferDetails.css";

function Offer() {
  const { offer, candidacies } = useLoaderData();
  const { logedUser } = useExternatic();

  return (
    <>
      <h1 className="style-title-h1 style-title-offer">{offer.title}</h1>
      {logedUser && logedUser.role_id === 1 && (
        <Star
          isFav={offer.offer_id !== null}
          cls="logo-star"
          offerId={offer.id}
        />
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
      </section>
      {logedUser && logedUser.role_id !== 1 && (
        <section>
          <h2 className=" style-article-offer style-title-h2 ">Candidatures</h2>
          {candidacies.length > 0 ? (
            <BoardList datas={candidacies} path="/consultants/candidats" />
          ) : (
            <h3 className="aucune-candidature">Aucune candidature actuellement</h3>
          )}
        </section>
      )}
      <ToastContainer />
    </>
  );
}

export default Offer;
