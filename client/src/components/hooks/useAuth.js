import { useState } from "react";

import connexion from "../../services/connexion";

const useAuth = () => {
  const initialUser = { mail: "", password: "", firstname: "", lastname: "" };
  const [user, setUser] = useState(initialUser);
  const [confirmPassword, setConfirmPassword] = useState("");

  const subscribe = async (newUser, confPassword) => {
    if (newUser.password === confPassword) {
      try {
        await connexion.post("/api/users/register", newUser);
        return {
          success: true,
        };
      } catch (error) {
        setUser(initialUser);
        setConfirmPassword("");
        return {
          success: false,
          msg: "L'adresse email est déjà utilisée",
        };
      }
    } else {
      setUser(initialUser);
      setConfirmPassword("");
      return {
        success: false,
        msg: "Les mots de passe ne correspondent pas !",
      };
    }
  };

  return {
    user,
    setUser,
    confirmPassword,
    setConfirmPassword,
    subscribe,
  };
};

export default useAuth;
