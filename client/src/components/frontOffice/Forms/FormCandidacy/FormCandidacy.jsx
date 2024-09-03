import { useState } from "react";
import PropTypes, { number } from "prop-types";

import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";
import DescriptionComponent from "../../../UI/Form/descriptionComponent/DescriptionComponent";
import successToast from "../../../UI/toaster/successToast";
import errorToast from "../../../UI/toaster/errorToast";

import connexion from "../../../../services/connexion";

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
      errorToast("Vous avez déja candidater pour ce poste");
    }
  };

  return (
    <form onSubmit={handleSubmitCandidacy}>
      <h2>Confirmation de candidature</h2>
      <p>Êtes-vous sûr de vouloir postuler pour cette offre ?</p>
      <DescriptionComponent
        label="Mes motivations"
        descriptionName="motivation"
        id="motivation"
        description={candidacy.motivation}
        handleChange={handleCandidacyChange}
        classBox="textarea-form"
        classBox2="textarea-form"
      />
      <SubmitComponent text="Confirmer" css="" />
    </form>
  );
}

Candidacy.propTypes = {
  contentProps: PropTypes.shape({
    offer: PropTypes.shape({ id: number.isRequired }).isRequired,
  }).isRequired,
};

export default Candidacy;
