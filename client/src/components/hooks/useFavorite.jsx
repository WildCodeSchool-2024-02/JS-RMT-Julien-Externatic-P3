import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExternatic } from "../../context/ExternaticContext";
import connexion from "../../services/connexion";

function useFavorite(isFav) {
  const navigate = useNavigate();
  const { logedUser, handleToast } = useExternatic();
  const [isFavorite, setIsFavorite] = useState(isFav);

  const handleFavoriteToggle = async (offerId) => {
    if (logedUser && logedUser.role_id === 1) {
      try {
        if (isFavorite) {
          await connexion.delete(`/api/favorite/${offerId}`);
          setIsFavorite(false);
          navigate(".", { replace: true });
          handleToast("success", "Offre supprimée des favoris !");
        } else {
          await connexion.post("/api/favorite", {
            offerId,
          });
          setIsFavorite(true);
          handleToast("success", "Offre ajoutée aux favoris !");
        }
      } catch (error) {
        console.error("Erreur lors de la modification des favoris :", error);
        handleToast("error", "Erreur lors de la modification des favoris.");
      }
    }
  };

  return {
    isFavorite,
    handleFavoriteToggle,
  };
}

export default useFavorite;
