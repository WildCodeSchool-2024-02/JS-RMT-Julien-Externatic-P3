import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";
import errorToast from "../../../UI/toaster/errorToast";

import connexion from "../../../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "../FormSignUp/FormSignUp.css";

const initialLog = {
  mail: "",
  password: "",
};

function FormLogin() {
  // Références pour les champs email et mot de passe

  const [user, setUser] = useState(initialLog);

  // Hook pour la navigation
  const navigate = useNavigate();

  const handleCheckLog = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await connexion.post(`/api/login/mail`, user);

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        navigate("/");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
      errorToast("L'adresse ou le mot de passe est incorrect");
    }
  };

  return (
    <form className="form-sign-up" onSubmit={handleSubmit}>
      <fieldset className="fieldset-sign-up">
        <legend className="legend-form">Connectez-vous</legend>
        <InputComponent
          label="Email :"
          inputName="mail"
          inputType="email"
          inputValue={user.mail}
          handleChange={handleCheckLog}
          id="mail"
          classBox=""
          isRequired
        />
        <InputComponent
          label="Mot de passe:"
          inputName="password"
          inputType="password"
          inputValue={user.password}
          handleChange={handleCheckLog}
          id="password"
          classBox=""
          isRequired
        />
      </fieldset>
      <SubmitComponent text="Valider" css="button-submit" />
      <ToastContainer />
    </form>
  );
}

export default FormLogin;
