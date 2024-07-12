import chevronRight from "../../assets/images/icones/chevron-right.svg";
import "./ProfilElement.css";

function ProfilElement() {
  return (
    <button type="button" to="/CV" className="profil-detail-link">
      <p> Mon CV</p>
      <div>
        <img src={chevronRight} alt="chevron droite" />
      </div>
    </button>
  );
}

export default ProfilElement;
