import { useState } from "react";
import { useExternatic } from "../../context/ExternaticContext";

import connexion from "../../services/connexion";

const useAuth = () => {
  const { setLogedUser } = useExternatic();
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

  const login = async (testedUser) => {
    try {
      const response = await connexion.post(`/api/users/login`, testedUser);
      if (response.status === 200) {
        const LoggedUser = response.data;
        setLogedUser(LoggedUser);
        switch (LoggedUser.role_id) {
          case 1:
            return {
              success: true,
              url: `/candidat/${LoggedUser.id}`,
            };
          case 2:
            return {
              success: true,
              url: `/consultants/offres`,
            };
          case 3:
            return {
              success: true,
              url: `/admin/consultants`,
            };
          default:
            return {
              success: false,
              msg: "Type de compte inconnu",
            };
        }
      } else {
        return {
          success: false,
          msg: "Réponse du serveur inattendue",
        };
      }
    } catch (err) {
      return {
        success: false,
        msg: "L'email ou le mot de passe est incorrect",
      };
    }
  };

  const logout = async () => {
    try {
      const response = await connexion.post("/api/users/logout");
      if (response.status === 200) {
        setLogedUser(null);
        return {
          success: true,
          msg: "Déconnexion effective",
        };
      }
      return {
        success: false,
        msg: "Une erreur est survenue lors de la déconnexion.",
      };
    } catch (err) {
      return {
        success: false,
        msg: "Une erreur est survenue lors de la déconnexion.",
      };
    }
  };

  return {
    user,
    setUser,
    confirmPassword,
    setConfirmPassword,
    subscribe,
    login,
    logout,
  };
};

export default useAuth;
