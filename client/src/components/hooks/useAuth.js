import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExternatic } from "../../context/ExternaticContext";

import connexion from "../../services/connexion";

const useAuth = () => {
  const { handleUser, handleToast } = useExternatic();
  const initialUser = { mail: "", password: "", firstname: "", lastname: "" };
  const [user, setUser] = useState(initialUser);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const subscribe = async (newUser, confPassword) => {
    if (newUser.password === confPassword) {
      try {
        await connexion.post("/api/users/register", newUser);
        handleToast(
          "succes",
          "Compte créé avec succès, Veuillez vous connecter"
        );
        navigate("/connexion");
      } catch (error) {
        handleToast("error", "L'adresse email est déjà utilisée");
        setUser(initialUser);
        setConfirmPassword("");
      }
    } else {
      handleToast("error", "Les mots de passe ne correspondent pas !");
      setUser(initialUser);
      setConfirmPassword("");
    }
  };

  const login = async (testedUser) => {
    try {
      const response = await connexion.post(`/api/users/login`, testedUser);
      if (response.status === 200) {
        const LoggedUser = response.data;
        handleUser(LoggedUser);
        switch (LoggedUser.role_id) {
          case 1:
            handleToast("succes", "Vous êtes connecté·e");
            navigate(`/candidat/${LoggedUser.id}?type=mine`);
            break;
          case 2:
            handleToast("succes", "Vous êtes connecté·e");
            navigate(`/consultants/offres`);
            break;

          case 3:
            handleToast("succes", "Vous êtes connecté·e");

            navigate(`/admin/consultants`);
            break;
          default:
            handleToast("error", "Type de compte inconnu");
        }
      } else {
        handleToast("error", "Réponse du serveur inattendue");
      }
    } catch (err) {
      handleToast("error", "L'email ou le mot de passe est incorrect");
    }
  };

  const logout = async () => {
    try {
      const response = await connexion.post("/api/users/logout");
      if (response.status === 200) {
        handleUser(null);
        handleToast("success", "Vous êtes déconnecté·es");
        navigate("/");
      } else {
        handleToast("error", "Une erreur est survenue lors de la déconnexion.");
      }
    } catch (err) {
      handleToast("error", "Une erreur est survenue lors de la déconnexion.");
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
