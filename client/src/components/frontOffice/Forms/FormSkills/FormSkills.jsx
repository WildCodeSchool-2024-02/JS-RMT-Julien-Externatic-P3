import { useState } from "react";
import { useExternatic } from "../../../../context/ExternaticContext";

import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";
import SelectComponent from "../../../UI/Form/selectComponent/SelectComponent";
import errorToast from "../../../UI/toaster/errorToast";
import successToast from "../../../UI/toaster/successToast";
import connexion from "../../../../services/connexion";

function FormSkills() {
  const [technology, setTechnology] = useState();
  const { logedUser } = useExternatic();

  const handleSelectChange = (e) => {
    setTechnology(e.target.value); // Met à jour l'état avec la valeur sélectionnée
  };

  const handleSubmitModifySkill = async (e) => {
    e.preventDefault();

    const data = {
      technology_id: parseInt(technology, 10),
      candidate_id: logedUser.id,
    };

    try {
      const response = await connexion.post("/api/technologyCandidate", data);
      if (response.data.affected === 1) {
        successToast("Compétence ajoutée avec succès !");
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
        "Une erreur est survenue lors de la mise à jour. Veuillez réessayer."
      );
    }
  };

  return (
    <form onSubmit={handleSubmitModifySkill} className="form-cv">
      <SelectComponent
        url="api/technology"
        id="technology_id"
        label="Compétences :"
        defaultOpt="Choisir une Compétence"
        name="technology_id"
        value={technology}
        handleChange={handleSelectChange}
        classBox=""
      />
      <SubmitComponent text="Valider" css="button-submit" />
    </form>
  );
}

export default FormSkills;
