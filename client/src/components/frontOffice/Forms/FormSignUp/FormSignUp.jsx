import { useState } from "react";
import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import ButtonComponent from "../../../UI/buttonComponent/ButtonComponent";

import "./FormSignUp.css";

const initialUser = {
  mail: "",
  password: "",
};

function FormSignUp() {
  const [user, setUser] = useState(initialUser);

  const handleUserCreate = (event) => {
    const { name, value } = event.target;
    setUser((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <form className="form-sign-up">
      <InputComponent
        label="Email :"
        inputName="mail"
        id="mail"
        inputValue={user.mail}
        handleChange={handleUserCreate}
      />
      <InputComponent
        label="Mot de passe :"
        id="mail"
        inputName="password"
        inputValue={user.password}
        handleChange={handleUserCreate}
      />
      <InputComponent label="Confirmez votre mot de passe :" />
      <ButtonComponent text="Valider" css="button-submit" />
    </form>
  );
}

export default FormSignUp;
