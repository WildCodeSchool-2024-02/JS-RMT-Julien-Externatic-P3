import PropTypes from "prop-types";

import blackStar from "../../../assets/icones/star-black.svg";
import pinkStar from "../../../assets/icones/star-pink.svg";

import "./ButtonFavorite.css";

function Star({ isFavorite, handleFavoriteToggle, className }) {
  return (
    <button type="button" onClick={handleFavoriteToggle} className={className}>
      <img src={isFavorite ? pinkStar : blackStar} alt="logo étoile" />
    </button>
  );
}

Star.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  handleFavoriteToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Star.defaultProps = {
  className: "logo-star",
};

export default Star;
