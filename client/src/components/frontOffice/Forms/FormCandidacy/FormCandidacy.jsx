import PropTypes from 'prop-types';
import ButtonComponent from "../../../UI/buttonComponent/ButtonComponent";

function Candidacy ({ closeModal }) {
  return (
  <div>
    <h2>Confirmation de candidature</h2>
    <p>Êtes-vous sûr de vouloir postuler pour cette offre ?</p>
    <ButtonComponent text="Confirmer" handleClick={closeModal} css="btn-confirm" />
    <ButtonComponent text="Annuler" handleClick={closeModal} css="btn-cancel" />
  </div>
  )
};

Candidacy.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Candidacy;