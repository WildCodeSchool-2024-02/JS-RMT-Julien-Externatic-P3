import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useExternatic } from "../../../../context/ExternaticContext";

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
  const [user, setUser] = useState(initialLog);
  const { setLogedUser } = useExternatic();
  const navigate = useNavigate();

  const handleCheckLog = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await connexion.post(`/api/login/mail`, user);

      if (response.status === 200) {
        const logedUSer = response.data;
        setLogedUser(logedUSer);
        if (logedUSer.role_id === 1) {
          navigate(`/candidat/${logedUSer.id}`);
        } else if (logedUSer.role_id === 2) {
          navigate(`/consultants`);
        } else if (logedUSer.role_id === 3) {
          navigate(`/admin`);
        }
      } else {
        console.info(response);
        errorToast("Connexion échouée, veuillez vérifier vos informations.");
      }
    } catch (err) {
      console.error(err);
      errorToast("L'email ou le mot de passe est incorrect");
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
