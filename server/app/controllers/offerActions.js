const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const { type } = req.query;
    // Vérifier le type de la requête dans les paramètres de la requête
    switch (type) {
      case "ByConsultant": // Si type est "ByConsultant", récupérer les offres pour le consultant spécifié
      {
        const consultantId = req.query.consultant || null;
        if (!consultantId) {
          res.status(400).json({ error: "Consultant ID is required" });
        }
        const offersByConsultant =
          await tables.offer.readAllByConsultant(consultantId);
        if (offersByConsultant.length === 0) {
          res.sendStatus(404);
        } else {
          res.status(200).json(offersByConsultant);
        }
        break;
      }
      default: // Par défaut, récupérer toutes les offres
      {
        const offers = await tables.offer.readAll();
        res.status(200).json(offers);
      }
    }
  } catch (err) {
    // Passer toute erreur à le middleware de gestion des erreurs
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const offer = await tables.offer.read(req.params.id);
    if (offer == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(offer[0]);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const offer = req.body;

  try {
    const insertId = await tables.offer.create(offer);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
