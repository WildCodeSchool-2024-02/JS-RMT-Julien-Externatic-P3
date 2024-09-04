import { useState } from "react";
import PropTypes from "prop-types";

import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";
import SelectComponent from "../../../UI/Form/selectComponent/SelectComponent";
import "./FormSkills.css";

import connexion from "../../../../services/connexion";
import { useExternatic } from "../../../../context/ExternaticContext";

function FormSkills({ fetchTechnologies }) {
  const [newTechnology, setNewTechnology] = useState();
  const { logedUser, handleToast } = useExternatic();

  const handleSelectChange = (e) => {
    setNewTechnology(e.target.value);
  };

  const handleSubmitModifySkill = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.post("/api/technologyCandidate", {
        technology_id: parseInt(newTechnology, 10),
        candidate_id: logedUser.id,
      });

      if (response.data.affected === 1) {
        handleToast("success", "Compétence ajoutée avec succès !");

        // Récupérer les compétences mises à jour après l'ajout réussi
        fetchTechnologies();
      } else if (response.data.affected === 0) {
        handleToast("error", "Vous avez déjà ajouté cette compétence");
      } else {
        handleToast("error", "Une erreur inconnue est survenue.");
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la mise à jour du profil !",
        error
      );
      handleToast(
        "error",
        "Une erreur est survenue lors de la mise à jour du profil. Veuillez réessayer."
      );
    }
  };

  return (
    <form onSubmit={handleSubmitModifySkill} className="form-skills">
      <SelectComponent
        url="api/technology"
        id="technology_id"
        label="Compétences :"
        defaultOpt="Choisir une Compétence"
        name="technology_id"
        value={newTechnology}
        handleChange={handleSelectChange}
        classBox="select-skills"
      />
      <SubmitComponent text="Valider" css="button-submit" />
    </form>
  );
}

FormSkills.propTypes = {
  fetchTechnologies: PropTypes.func.isRequired,
};

export default FormSkills;
