import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useExternatic } from "../../../context/ExternaticContext";

import Badge from "../../UI/Badge/Badge";
import Star from "../../UI/buttonComponent/ButtonStar";

import iconeLoc from "../../../assets/icones/localisation-icone.svg";
import iconeOcta from "../../../assets/icones/octagon-icone.svg";

import "./OfferCard.css";

function OfferCard({ offer, showStar, isApply }) {
  const { logedUser } = useExternatic();

  return (
    <article
      className={
        isApply ? "card-container card-apply" : "card-container card-not-apply"
      }
    >
      <h2 className="style-title-h2 style-title-h2-card">{offer.title}</h2>
      {showStar && logedUser && logedUser.role_id === 1 && (
        <Star
          isFav={offer.offer_id !== null}
          cls="logo-star-card"
          offerId={offer.id}
        />
      )}
      <Badge
        clss="badge-offer-card"
        src={iconeLoc}
        alt="logo localisation"
        text={offer.city}
      />
      <Badge
        clss="badge-offer-card"
        src={iconeOcta}
        alt="logo salaire"
        text={`${offer.salary} € annuel brut`}
      />
      <Link to={`/offres/${offer.id}`} className="link-style-1">
        Voir l'offre
      </Link>
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    offer_id: PropTypes.number.isRequired,
  }).isRequired,
  showStar: PropTypes.bool,
  isApply: PropTypes.bool.isRequired,
};

OfferCard.defaultProps = {
  showStar: true,
};

export default OfferCard;
