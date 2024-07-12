import PropTypes from "prop-types";
import chevronRight from "../../assets/images/icones/chevron-right.svg";
import "./ProfilElement.css";

function ProfilElement({ title }) {
  return (
    <button
      type="button"
      to="/CV"
      className="profil-detail-link paragraph-style"
    >
      <p>{title}</p>
      <div>
        <img src={chevronRight} alt="chevron droite" />
      </div>
    </button>
  );
}
ProfilElement.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProfilElement;
