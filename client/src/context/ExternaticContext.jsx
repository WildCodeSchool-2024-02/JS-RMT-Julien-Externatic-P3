import { createContext, useState, useMemo, useContext } from "react";
import PropTypes from "prop-types";

// Créer le contexte utilisateur
const ExternaticContext = createContext();

export function ExternaticProvider({ children }) {
  // État pour stocker les informations utilisateur
  const [logedUser, setLogedUser] = useState(null);

  // Mémorisation de l'objet value pour éviter les rendus inutiles
  const value = useMemo(
    () => ({ logedUser, setLogedUser }),
    [logedUser, setLogedUser]
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
