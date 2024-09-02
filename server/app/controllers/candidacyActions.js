const tables = require("../../database/tables");

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const { candidateId, offerId } = req.body;

  try {
    // Ajoute le favori et récupère le résultat
    const result = await tables.candidacy.addCandidacy(candidateId, offerId);

    // Vérifie si l'insertion a réussi
    if (result.affectedRows > 0) {
      // Réponse réussie avec message de confirmation
      res.status(201).json({ message: "Candidacy added successfully" });
    } else {
      // Cas où aucune ligne n'a été affectée (rare pour un INSERT mais à vérifier)
      res.status(400).json({ error: "Failed to add candidacy" });
    }
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      // Erreur de doublon : la candidature existe déjà
      res
        .status(400)
        .json({ error: "You have already applied for this offer" });
    } else {
      // Autres erreurs : passer à la gestion des erreurs
      next(error);
    }
  }
};

module.exports = {
  add,
};
