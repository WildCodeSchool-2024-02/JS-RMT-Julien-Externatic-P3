import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";
import errorToast from "../../../UI/toaster/errorToast";

import "react-toastify/dist/ReactToastify.css";
import "../FormSignUp/FormSignUp.css";
import useAuth from "../../../hooks/useAuth";

function FormLogin() {
  const navigate = useNavigate();
  const { user, setUser, login } = useAuth();

  const handleCheckLog = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await login(user);
    if (response.success) {
      navigate(response.url);
    } else {
      errorToast(response.msg);
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
      <p className="link-register-login">
        Vous n'avez pas de compte ?
        <Link to="/inscription"> Inscrivez-vous !</Link>
      </p>
      <ToastContainer />
    </form>
  );
}

export default FormLogin;
