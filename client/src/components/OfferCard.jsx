import PropTypes from 'prop-types';

import logoLoc from "../assets/icones/localisation-icone.svg";
import octoLoc from "../assets/icones/octagon-icone.svg";

import "./OfferCard.css";

function OfferCard({ offer }) {
  return (
    <div className="card-container">
      <h2 className="style-title-h2">{offer.title}</h2>
      <section className="section-loc">
        <img src={logoLoc} alt="logo localisation" />
        <p>{offer.city}</p>
      </section>
      <section className="section-sal">
        <img src={octoLoc} alt="logo salaire" />
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
