import { useState } from "react";
import PropTypes, { number } from "prop-types";

import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";
import DescriptionComponent from "../../../UI/Form/descriptionComponent/DescriptionComponent";
import successToast from "../../../UI/toaster/successToast";
import errorToast from "../../../UI/toaster/errorToast";

import connexion from "../../../../services/connexion";
import "./FormCandidacy.css";

function Candidacy({ contentProps }) {
  const { offer } = contentProps;
  const [candidacy, setCandidacy] = useState({
    offer_id: offer.id,
    motivation: null,
  });

  const handleCandidacyChange = (event) => {
    const { name, value } = event.target;
    setCandidacy((prevCandidacy) => ({
      ...prevCandidacy,
      [name]: value,
    }));
  };

  const handleSubmitCandidacy = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/api/candidacy/", candidacy);
      successToast("Votre candidature à bien été reçue !");
    } catch (error) {
      console.error(error);
      if (candidacy.motivation === null) {
        errorToast("Vous devez laisser un message de motivation !");
      } else {
        errorToast("Vous avez déja candidater pour ce poste");
      }
    }
  };

  return (
    <form className="apply-form" onSubmit={handleSubmitCandidacy}>
      <h2>Confirmation de candidature</h2>
      <p>
        Candidature simplifiée: nous récupérons les informations de votre profil
        pour procéder à votre candidature.
      </p>
      <p>
        Laissez un message de motivation pour vous démarquer des autres
        candidats !
      </p>
      <DescriptionComponent
        label="Mes motivations"
        descriptionName="motivation"
        id="motivation"
        description={candidacy.motivation}
        handleChange={handleCandidacyChange}
        classBox="textarea-form candidacy-box"
        classBox2="textarea-form candidacy-textarea"
      />
      <SubmitComponent text="Confirmer" css="candidacy-button" />
    </form>
  );
}

Candidacy.propTypes = {
  contentProps: PropTypes.shape({
    offer: PropTypes.shape({ id: number.isRequired }).isRequired,
  }).isRequired,
};

export default Candidacy;
