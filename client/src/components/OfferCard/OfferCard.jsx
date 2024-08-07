import PropTypes from "prop-types";
import Badge from "../UI/Badge";
import iconeLoc from "../../assets/icones/localisation-icone.svg";
import iconeOcta from "../../assets/icones/octagon-icone.svg";

import "./OfferCard.css";

function OfferCard({ offer }) {
  return (
    <article className="card-container">
      <h2 className="style-title-h2">{offer.title}</h2>
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
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
  }).isRequired,
};

export default OfferCard;