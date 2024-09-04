import PropTypes from "prop-types";
import ButtonComponent from "../../../UI/buttonComponent/ButtonComponent";

function Candidacy({ contentProps }) {
  const { closeApplyModal } = contentProps;
  return (
    <div>
      <h2>Confirmation de candidature</h2>
      <p>Êtes-vous sûr de vouloir postuler pour cette offre ?</p>
      <ButtonComponent
        text="Confirmer"
        handleClick={closeApplyModal}
        css="btn-confirm"
      />
      <ButtonComponent
        text="Annuler"
        handleClick={closeApplyModal}
        css="btn-cancel"
      />
    </div>
  );
}

Candidacy.propTypes = {
  contentProps: PropTypes.shape(PropTypes.func.isRequired).isRequired,
};

export default Candidacy;
