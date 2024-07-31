import { useLoaderData } from "react-router-dom";

import Badge from "../../components/UI/Badge";
import iconeAward from "../../assets/icones/award-icone.svg";
import iconeCase from "../../assets/icones/briefcase-icone.svg";
import iconeCalendar from "../../assets/icones/calendar-icone.svg";
import iconeClock from "../../assets/icones/clock-icone.svg";
import iconeDollar from "../../assets/icones/dollar-icone.svg";
import iconeFile from "../../assets/icones/file-icone.svg";
import iconeLoc from "../../assets/icones/localisation-icone.svg";

import "./Offer.css";

function Offer() {
  const offer = useLoaderData();

  return (
    <main>
      <div className="">
        <h1 className="style-title-h1">{offer.title}</h1>
      </div>
      <section className="logo-container">
        <Badge
          src={iconeClock}
          alt="logo horloge"
          text={`Temps de travail : ${offer.format}`}
        />
        <Badge
          src={iconeFile}
          alt="logo fichier"
          text={`Type de contrat : ${offer.contractName}`}
        />
        <Badge
          src={iconeCase}
          alt="logo valise"
          text={`Secteur d'activité : ${offer.activityAreaName}`}
        />
        <Badge
          src={iconeCalendar}
          alt="logo calendrier"
          text={`Date de prise de poste : ${offer.start_date}`}
        />
        <Badge
          src={iconeDollar}
          alt="logo dollar"
          text={`Salaire : ${offer.salary} € annuel brut`}
        />
        <Badge
          src={iconeLoc}
          alt="logo localisation"
          text={`Lieu d'activité : ${offer.city}`}
        />
        <Badge
          src={iconeAward}
          alt="logo medaille"
          text={`Formation demandée : ${offer.level}`}
        />
      </section>
      <section>
        <h2 className="style-title-h1">Détails de l'offre</h2>
        <article>
          <h3 className="style-title-h2">Présentation de la société</h3>
          <p>{offer.description}</p>
        </article>
        <article>
          <h3 className="style-title-h2">Les Missions</h3>
          <p>{offer.missions}</p>
        </article>
        <article>
          <h3 className="style-title-h2">Profil</h3>
          <p>{offer.profil_desc}</p>
        </article>
        <article>
          <h3 className="style-title-h2">Les Avantages</h3>
          <p>{offer.benefits}</p>
        </article>
      </section>
    </main>
  );
}

export default Offer;
