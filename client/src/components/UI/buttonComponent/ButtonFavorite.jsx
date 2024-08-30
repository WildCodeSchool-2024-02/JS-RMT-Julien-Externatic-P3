import PropTypes from "prop-types";
import useFavorite from "../../hooks/useFavorite";
import blackStar from "../../../assets/icones/star-black.svg";
import pinkStar from "../../../assets/icones/star-pink.svg";

import "./ButtonFavorite.css";

function Star({ isFav, cls, offerId }) {
  const { isFavorite, handleFavoriteToggle } = useFavorite(isFav);

  return (
    <button type="button" onClick={() => handleFavoriteToggle(offerId)} className={cls}>
      <img src={isFavorite ? pinkStar : blackStar} alt="logo étoile" />
    </button>
  );
}

Star.propTypes = {
  isFav: PropTypes.bool.isRequired,
  cls: PropTypes.string,
  offerId: PropTypes.number.isRequired
};

Star.defaultProps = {
  cls: "logo-star",
};

export default Star;
