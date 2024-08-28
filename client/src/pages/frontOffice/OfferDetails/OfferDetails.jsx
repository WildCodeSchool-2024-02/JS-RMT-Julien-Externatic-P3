import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useExternatic } from "../../../context/ExternaticContext";
import connexion from "../../../services/connexion";

import Badge from "../../../components/UI/Badge/Badge";
import H2p from "../../../components/UI/H2p/H2p";

import errorToast from "../../../components/UI/toaster/errorToast";
import successToast from "../../../components/UI/toaster/successToast";

import iconeAward from "../../../assets/icones/award-icone.svg";
import iconeCase from "../../../assets/icones/briefcase-icone.svg";
import iconeCalendar from "../../../assets/icones/calendar-icone.svg";
import iconeClock from "../../../assets/icones/clock-icone.svg";
import iconeDollar from "../../../assets/icones/dollar-icone.svg";
import iconeFile from "../../../assets/icones/file-icone.svg";
import iconeLoc from "../../../assets/icones/localisation-icone.svg";
import blackStar from "../../../assets/icones/star-black.svg";
import pinkStar from "../../../assets/icones/star-pink.svg";

import "./OfferDetails.css";

function Offer() {
  const offer = useLoaderData();
  const { logedUser } = useExternatic();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      if (logedUser && logedUser.role_id === 1) {
        try {
          const response = await connexion.get(
            `http://localhost:3310/api/favorite/${logedUser.id}`
          );

          const favorites = response.data;
          const controlFavorite = favorites.some(
            (fav) => fav.offer_id === offer.id
          );
          setIsFavorite(controlFavorite);
        } catch (error) {
          console.error("Erreur lors de la vérification des favoris :", error);
        }
      }
    };

    checkFavorite();
  }, [logedUser, offer.id]);

  const handleFavoriteToggle = async () => {
    if (logedUser && logedUser.role_id === 1) {
      try {
        if (isFavorite) {
          // Supprimer du favori
          await connexion.delete(
            `http://localhost:3310/api/favorite/${logedUser.id}/${offer.id}`
          );
          setIsFavorite(false);
          errorToast("Offre supprimée des favoris !");
        } else {
          // Ajouter au favori
          await connexion.post("http://localhost:3310/api/favorite", {
            candidateId: logedUser.id,
            offerId: offer.id,
          });
          setIsFavorite(true);
          successToast("Offre ajoutée aux favoris !");
        }
      } catch (error) {
        console.error("Erreur lors de la modification des favoris :", error);
        errorToast("Erreur lors de la modification des favoris.");
      }
    }
  };

  return (
    <>
      <h1 className="style-title-h1 style-title-offer">{offer.title}</h1>
      {logedUser && logedUser.role_id === 1 && (
        <button
          type="button"
          onClick={handleFavoriteToggle}
          className="logo-star"
        >
          <img src={isFavorite ? pinkStar : blackStar} alt="logo étoile" />
        </button>
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
      <ToastContainer />
    </>
  );
}

export default Offer;
