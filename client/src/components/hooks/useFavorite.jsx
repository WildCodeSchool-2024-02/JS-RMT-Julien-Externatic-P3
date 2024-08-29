import { useState, useEffect } from "react";
import { useExternatic } from "../../context/ExternaticContext";
import connexion from "../../services/connexion";
import errorToast from "../UI/toaster/errorToast";
import successToast from "../UI/toaster/successToast";

function useFavorite(offerId) {
  const { logedUser } = useExternatic();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      if (logedUser && logedUser.role_id === 1) {
        try {
          const response = await connexion.get(
            `http://localhost:3310/api/favorite/${logedUser.id}`
          );

          const favorites = response.data;
          const controlFavorite = favorites.some(
            (fav) => fav.offer_id === offerId
          );
          setIsFavorite(controlFavorite);
        } catch (error) {
          console.error("Erreur lors de la vérification des favoris :", error);
        }
      }
    };

    checkFavorite();
  }, [logedUser, offerId]);

  const handleFavoriteToggle = async () => {
    if (logedUser && logedUser.role_id === 1) {
      try {
        if (isFavorite) {
          await connexion.delete(
            `http://localhost:3310/api/favorite/${logedUser.id}/${offerId}`
          );
          setIsFavorite(false);
          errorToast("Offre supprimée des favoris !");
        } else {
          await connexion.post("http://localhost:3310/api/favorite", {
            candidateId: logedUser.id,
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
