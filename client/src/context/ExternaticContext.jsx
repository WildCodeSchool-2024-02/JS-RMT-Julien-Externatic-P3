import {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";

// Créer le contexte utilisateur
const ExternaticContext = createContext();

export function ExternaticProvider({ children }) {
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

  useEffect(() => {
    const savedUser = localStorage.getItem("LoggedUser");
    if (savedUser) {
      setLogedUser(JSON.parse(savedUser));
    } else {
      setLogedUser(null);
    }
  }, []);

  // Mémorisation de l'objet value pour éviter les rendus inutiles
  const value = useMemo(
    () => ({ logedUser, handleUser }),
    [logedUser, handleUser]
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
