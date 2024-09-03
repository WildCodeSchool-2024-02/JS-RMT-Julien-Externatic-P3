// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  const candidateId = req.auth.id;

  try {
    const favorites = await tables.favorite.readByCandidate(candidateId);
    if (favorites.length > 0) {
      res.status(200).json(favorites);
    } else {
      res.status(404).json({ error: "No favorites found for this candidate" });
    }
  } catch (error) {
    next(error);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const { offerId } = req.body;
  try {
    // Ajoute le favori et récupère le résultat
    const result = await tables.favorite.addFavorite(req.auth.id, offerId);

    // Vérifie si l'insertion a réussi
    if (result.affectedRows > 0) {
      // Réponse réussie avec message de confirmation
      res.status(201).json({ message: "Favorite added successfully" });
    } else {
      // Cas où aucune ligne n'a été affectée (rare pour un INSERT mais à vérifier)
      res.status(400).json({ error: "Failed to add favorite" });
    }
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      // Erreur de doublon : le favori existe déjà
      res
        .status(400)
        .json({ error: "This offer is already in your favorites" });
    } else {
      // Autres erreurs : passer à la gestion des erreurs
      next(error);
    }
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  const { offerId } = req.params;
  try {
    const result = await tables.favorite.removeFavorite(req.auth.id, offerId);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Favorite deleted successfully" });
    } else {
      res.status(404).json({ error: "Favorite not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  add,
  destroy,
  read,
};
