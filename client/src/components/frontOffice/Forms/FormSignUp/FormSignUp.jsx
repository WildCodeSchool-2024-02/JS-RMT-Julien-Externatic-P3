import { Link, useNavigate } from "react-router-dom";

import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";

import { useExternatic } from "../../../../context/ExternaticContext";
import useAuth from "../../../hooks/useAuth";
import "./FormSignUp.css";

function FormSignUp() {
  const navigate = useNavigate();
  const { user, setUser, confirmPassword, setConfirmPassword, subscribe } =
    useAuth();
  const { handleToast } = useExternatic();

  const getInputClass = () => {
    if (user.password === confirmPassword && user.password.length > 0) {
      return "confirm-input";
    }
    if (user.password !== confirmPassword && user.password.length > 0) {
      return "refuse-input";
    }
    return "";
  };

  const handleUserCreate = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmitCreateUser = async (e) => {
    e.preventDefault();
    const result = await subscribe(user, confirmPassword);
    if (result.success) {
      handleToast("succes", result.msg);
      navigate(result.url);
    } else {
      handleToast("error", result.msg);
    }
  };

  return (
    <form className="form-sign-up" onSubmit={handleSubmitCreateUser}>
      <fieldset className="fieldset-sign-up">
        <legend className="legend-form">Identité</legend>
        <InputComponent
          label="Nom :"
          inputName="lastname"
          inputType="text"
          id="lastname"
          inputValue={user.lastname}
          handleChange={handleUserCreate}
          classBox2=""
          isRequired
        />
        <InputComponent
          label="Prénom :"
          inputName="firstname"
          inputType="text"
          id="firstname"
          inputValue={user.firstname}
          handleChange={handleUserCreate}
          classBox2=""
          isRequired
        />
      </fieldset>
      <fieldset className="fieldset-sign-up">
        <legend className="legend-form">Informations de connexion</legend>
        <InputComponent
          label="Email :"
          inputName="mail"
          inputType="email"
          id="mail"
          inputValue={user.mail}
          handleChange={handleUserCreate}
          classBox2=""
          isRequired
        />
        <InputComponent
          label="Mot de passe :"
          id="mail"
          inputType="password"
          inputName="password"
          inputValue={user.password}
          handleChange={handleUserCreate}
          classBox2={getInputClass()}
          isRequired
        />
        <InputComponent
          inputType="password"
          label="Confirmez le mot de passe :"
          inputName="confirm-password"
          id="confirm-password"
          inputValue={confirmPassword}
          handleChange={handleConfirmPassword}
          classBox2={getInputClass()}
          isRequired
        />
      </fieldset>
      <SubmitComponent text="Valider" css="button-submit" />
      <p className="link-register-login">
        Déjà-inscrit ? <Link to="/connexion"> Connectez-vous ! </Link>
      </p>
    </form>
  );
}

export default FormSignUp;
