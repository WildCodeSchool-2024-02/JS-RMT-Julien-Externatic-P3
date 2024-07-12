import PropTypes from 'prop-types';

import iconeLoc from "../assets/icones/localisation-icone.svg";
import iconeOcta from "../assets/icones/octagon-icone.svg";

import "./OfferCard.css";

function OfferCard({ offer }) {
  return (
    <div className="card-container">
      <h2 className="style-title-h2">{offer.title}</h2>
      <section className="section-loc">
        <img src={iconeLoc} alt="logo localisation" />
        <p>{offer.city}</p>
      </section>
      <section className="section-sal">
        <img src={iconeOcta} alt="logo salaire" />
        <p>{offer.salary} € annuel brut</p>
      </section>
    </div>
  )
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
  }).isRequired,
};

export default OfferCard
