import {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";

import successToast from "../components/UI/toaster/successToast";
import errorToast from "../components/UI/toaster/errorToast";

// Créer le contexte utilisateur
const ExternaticContext = createContext();

export function ExternaticProvider({ children }) {
  // État pour stocker les informations utilisateur
  const [logedUser, setLogedUser] = useState(null);

  const handleUser = useCallback((user) => {
    if (user) {
      localStorage.setItem("LoggedUser", JSON.stringify(user));
      setLogedUser(user);
    } else {
      localStorage.removeItem("LoggedUser");
      setLogedUser(null);
    }
  }, []);

  const handleToast = useCallback((type, msg) => {
    if (type === "succes") {
      successToast(msg);
    }
    if (type === "error") {
      errorToast(msg);
    }
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("LoggedUser");
    if (savedUser) {
      setLogedUser(JSON.parse(savedUser));
    }
    setLogedUser(null);
  }, []);

  // Mémorisation de l'objet value pour éviter les rendus inutiles
  const value = useMemo(
    () => ({ logedUser, handleUser, handleToast }),
    [logedUser, handleUser, handleToast]
  );

  return (
    <ExternaticContext.Provider value={value}>
      {children}
    </ExternaticContext.Provider>
  );
}

// Ajouter la validation des propriétés
ExternaticProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useExternatic = () => useContext(ExternaticContext);
