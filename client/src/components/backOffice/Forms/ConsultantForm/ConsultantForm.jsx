import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Submit from "../../../UI/buttonComponent/SubmitComponent";
import Input from "../../../UI/Form/inputComponent/InputComponent";
import Textarea from "../../../UI/Form/descriptionComponent/DescriptionComponent";

import "./ConsultantForm.css";
import connexion from "../../../../services/connexion";

function ConsultantForm({ contentProps }) {
  const { setIsModalOpen } = contentProps;
  const [consultant, setConsultant] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsultant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer toutes les données en une seule requête
      const userData = {
        mail: consultant.mail,
        password: consultant.password,
        firstname: consultant.firstname,
        lastname: consultant.lastname,
        description: consultant.description,
      };

      const response = await connexion.post("/api/users/consultant", userData);

      if (response.status !== 201) {
        throw new Error("Erreur lors de la création de l'utilisateur");
      }

      // Fermer la modal et rediriger après succès
      setIsModalOpen(false);
      navigate(".", { replace: true });
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-sign-up">
      <h1 className="style-title-h1">Ajouter un consultant</h1>
      <fieldset className="fieldset-sign-up">
        <legend className="legend-form">Informations de connexion</legend>
        <Input
          id="mail"
          label="Adresse mail"
          inputType="email"
          inputName="mail"
          inputValue={consultant.mail || ""}
          handleChange={handleChange}
          classBox="title-offer-form"
          isRequired
        />
        <Input
          id="password"
          label="Mot de passe"
          inputType="password"
          inputName="password"
          inputValue={consultant.password || ""}
          handleChange={handleChange}
          classBox="title-offer-form"
          isRequired
        />
      </fieldset>
      <fieldset className="fieldset-sign-up">
        <legend className="legend-form">Informations personnelles</legend>
        <Input
          id="firstname"
          label="Prénom"
          inputType="text"
          inputName="firstname"
          inputValue={consultant.firstname || ""}
          handleChange={handleChange}
          classBox="title-offer-form"
          isRequired
        />
        <Input
          id="lastname"
          label="Nom de famille"
          inputType="text"
          inputName="lastname"
          inputValue={consultant.lastname || ""}
          handleChange={handleChange}
          classBox="title-offer-form"
          isRequired
        />
        <Textarea
          id="description"
          label="Description du consultant"
          descriptionName="description"
          description={consultant.description || ""}
          handleChange={handleChange}
          classBox="consultant-descrition-form"
          classBox2="textarea-form"
          isRequired
        />
      </fieldset>
      <Submit text="Valider" css="validate-offer" handleClick={handleSubmit} />
    </form>
  );
}

ConsultantForm.propTypes = {
  contentProps: PropTypes.shape({
    setIsModalOpen: PropTypes.func.isRequired,
  }).isRequired,
};

export default ConsultantForm;
