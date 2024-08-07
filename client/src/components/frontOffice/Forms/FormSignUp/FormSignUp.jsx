import { useState } from "react";
import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import ButtonComponent from "../../../UI/buttonComponent/ButtonComponent";

import connexion from "../../../../services/connexion";
import "./FormSignUp.css";

const initialUser = {
  mail: "",
  password: "",
};

function FormSignUp() {
  const [user, setUser] = useState(initialUser);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUserCreate = (event) => {
    const { name, value } = event.target;
    setUser((prevProfile) => ({
      ...prevProfile,
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
      } catch (error) {
        console.error("There was an error updating the profile!", error);
      }
      setUser((prev) => ({
        ...prev,
      }));
      setUser(initialUser);
      setConfirmPassword("");
    } else {
      setUser(initialUser);
      setConfirmPassword("");
    }
  };

  return (
    <form className="form-sign-up" onSubmit={handleSubmitCreateUser}>
      <InputComponent
        label="Email :"
        inputName="mail"
        inputType="text"
        id="mail"
        inputValue={user.mail}
        handleChange={handleUserCreate}
      />
      <InputComponent
        label="Mot de passe :"
        id="mail"
        inputType="password"
        inputName="password"
        inputValue={user.password}
        handleChange={handleUserCreate}
      />
      <InputComponent
        inputType="password"
        label="Confirmez votre mot de passe :"
        inputName="confirm-password"
        id="confirm-password"
        inputValue={confirmPassword}
        handleChange={handleConfirmPassword}
      />
      {user.password === confirmPassword ? "✅" : "❌"}
      <ButtonComponent text="Valider" css="button-submit" />
    </form>
  );
}

export default FormSignUp;
