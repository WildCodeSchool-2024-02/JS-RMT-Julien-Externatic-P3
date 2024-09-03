import { useState } from "react";
import PropTypes from "prop-types";

import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";
import SelectComponent from "../../../UI/Form/selectComponent/SelectComponent";
import errorToast from "../../../UI/toaster/errorToast";
import successToast from "../../../UI/toaster/successToast";
import "./FormSkills.css";

import connexion from "../../../../services/connexion";
import { useExternatic } from "../../../../context/ExternaticContext";

function FormSkills({ setTechnologies }) {
  const [newTechnology, setNewTechnology] = useState();
  const { logedUser } = useExternatic();

  const handleSelectChange = (e) => {
    setNewTechnology(e.target.value);
  };

  const handleSubmitModifySkill = async (e) => {
    e.preventDefault();

    const data = {
      technology_id: parseInt(newTechnology, 10),
      candidate_id: logedUser.id,
    };

    try {
      const response = await connexion.post("/api/technologyCandidate", data);
      if (response.data.affected === 1) {
        successToast("Compétence ajoutée avec succès !");
        const responseSkills = await connexion.get(
          `/api/users/${data.candidate_id}/technologies`
        );
        setTechnologies(responseSkills.data);
      } else if (response.data.affected === 0) {
        errorToast("Vous avez déja ajouté cette compétence");
      } else {
        errorToast("Une erreur inconnue est survenue.");
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la mise à jour du profil !",
        error
      );
      errorToast(
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
  setTechnologies: PropTypes.func.isRequired,
};

export default FormSkills;
