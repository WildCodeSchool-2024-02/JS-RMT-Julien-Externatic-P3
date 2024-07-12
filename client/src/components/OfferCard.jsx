import PropTypes from 'prop-types';

import logoLoc from "../assets/icones/localisation-icone.svg";
import octoLoc from "../assets/icones/octagon-icone.svg";

import "../App.css";
import "./OfferCard.css";

function OfferCard({ offer }) {
  return (
    <div className="cardContainer">
      <h2 className="styleTitleH2">{offer.title}</h2>
      <section className="sectionLoc">
        <img src={logoLoc} alt="logo localisation" />
        <p>{offer.city}</p>
      </section>
      <section className="sectionSal">
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
