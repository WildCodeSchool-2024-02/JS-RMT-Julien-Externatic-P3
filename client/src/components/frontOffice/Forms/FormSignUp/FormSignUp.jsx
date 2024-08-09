import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import ButtonComponent from "../../../UI/buttonComponent/ButtonComponent";

import connexion from "../../../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./FormSignUp.css";

const initialUser = {
  mail: "",
  password: "",
  firstname: "",
  lastname: "",
};

function FormSignUp() {
  const [user, setUser] = useState(initialUser);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [message]);

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

    if (user.password === confirmPassword) {
      try {
        await connexion.post("/api/users/", user);
        navigate("/");
      } catch (error) {
        setMessage("Il existe déjà un compte avec cette adresse mail !");
        setUser(initialUser);
        setConfirmPassword("");
      }
    } else {
      setMessage("Les mots de passe ne correspondent pas !");
      setUser(initialUser);
      setConfirmPassword("");
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
          classBox=""
          isRequired
        />
        <InputComponent
          label="Prénom :"
          inputName="firstname"
          inputType="text"
          id="firstname"
          inputValue={user.firstname}
          handleChange={handleUserCreate}
          classBox=""
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
          classBox=""
          isRequired
        />
        <InputComponent
          label="Mot de passe :"
          id="mail"
          inputType="password"
          inputName="password"
          inputValue={user.password}
          handleChange={handleUserCreate}
          classBox={getInputClass()}
          isRequired
        />
        <InputComponent
          inputType="password"
          label="Confirmez le mot de passe :"
          inputName="confirm-password"
          id="confirm-password"
          inputValue={confirmPassword}
          handleChange={handleConfirmPassword}
          classBox={getInputClass()}
          isRequired
        />
      </fieldset>
      <ButtonComponent text="Valider" css="button-submit" />
      <ToastContainer />
    </form>
  );
}

export default FormSignUp;
