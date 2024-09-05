import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useExternatic } from "../../../context/ExternaticContext";

import Badge from "../../UI/Badge/Badge";
import Star from "../../UI/buttonComponent/ButtonStar";

import iconeLoc from "../../../assets/icones/localisation-icone.svg";
import iconeOcta from "../../../assets/icones/octagon-icone.svg";
import iconeBoard from "../../../assets/icones/clipboard-icone.svg";
import iconeClock from "../../../assets/icones/clock-icone.svg";

import "./Card.css";

function Card({ data, showStar, context, isApply }) {
  const { logedUser } = useExternatic();

  return (
    <article
      className={
        isApply ? "card-container card-apply" : "card-container card-not-apply"
      }
    >
      <h2 className="style-title-h2 style-title-h2-card">{data.title}</h2>

      {context === "candidacy" ? (
        <>
          <Badge
            clss="badge-offer-card"
            src={iconeBoard}
            alt="logo status"
            text={data.label}
          />
          <Badge
            clss="badge-offer-card"
            src={iconeClock}
            alt="logo horloge"
            text={data.created_at}
          />
        </>
      ) : (
        <>
          <Badge
            clss="badge-offer-card"
            src={iconeLoc}
            alt="logo localisation"
            text={data.city}
          />
          <Badge
            clss="badge-offer-card"
            src={iconeOcta}
            alt="logo salaire"
            text={`${data.salary} € annuel brut`}
          />
        </>
      )}
      {showStar &&
        logedUser &&
        logedUser.role_id === 1 &&
        context !== "candidacy" && (
          <Star
            isFav={data.offer_id !== null}
            cls="logo-star-card"
            offerId={data.id}
          />
        )}

      <Link to={`/offres/${data.id}`} className="link-style-1">
        Voir l'offre
      </Link>
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    offer_id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  showStar: PropTypes.bool,
  context: PropTypes.string,
  isApply: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  showStar: true,
  context: "offer",
};

export default Card;
