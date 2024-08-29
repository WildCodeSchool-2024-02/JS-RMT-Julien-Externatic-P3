import PropTypes from "prop-types";
import useFavorite from "../../hooks/useFavorite";
import blackStar from "../../../assets/icones/star-black.svg";
import pinkStar from "../../../assets/icones/star-pink.svg";

import "./ButtonFavorite.css";

function Star({ isFav, className, offerId }) {
  const { isFavorite, handleFavoriteToggle } = useFavorite(isFav);

  return (
    <button type="button" onClick={() => handleFavoriteToggle(offerId)} className={className}>
      <img src={isFavorite ? pinkStar : blackStar} alt="logo étoile" />
    </button>
  );
}

Star.propTypes = {
  isFav: PropTypes.bool.isRequired,
  className: PropTypes.string,
  offerId: PropTypes.number.isRequired
};

Star.defaultProps = {
  className: "logo-star",
};

export default Star;
