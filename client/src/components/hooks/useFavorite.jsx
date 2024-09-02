import { useState } from "react";
import { useExternatic } from "../../context/ExternaticContext";
import connexion from "../../services/connexion";

import errorToast from "../UI/toaster/errorToast";
import successToast from "../UI/toaster/successToast";

function useFavorite(isFav) {
  const { logedUser } = useExternatic();
  const [isFavorite, setIsFavorite] = useState(isFav);

  const handleFavoriteToggle = async (offerId) => {
    if (logedUser && logedUser.role_id === 1) {
      try {
        if (isFavorite) {
          await connexion.delete(`/api/favorite/${offerId}`);
          setIsFavorite(false);
          errorToast("Offre supprimée des favoris !");
        } else {
          await connexion.post("/api/favorite", {
            offerId,
          });
          setIsFavorite(true);
          successToast("Offre ajoutée aux favoris !");
        }
      } catch (error) {
        console.error("Erreur lors de la modification des favoris :", error);
        errorToast("Erreur lors de la modification des favoris.");
      }
    }
  };

  return {
    isFavorite,
    handleFavoriteToggle,
  };
}

export default useFavorite;
