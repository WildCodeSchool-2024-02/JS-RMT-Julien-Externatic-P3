const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const { type, consultant, category } = req.query;

    // Vérifier le type de la requête dans les paramètres de la requête
    switch (type) {
      case "ByConsultant":
      case "Category": {
        // Si l'ID "Category" ou "Consultant" n'est pas ajouter
        if (!category && !consultant) {
          res.status(400).json({ error: "ID is required" });
        }
        let offers = [];
        if (type === "Category") {
          offers = await tables.offer.readAllCategory(category);
        } else {
          offers = await tables.offer.readAllByConsultant(consultant);
        }
        if (offers.length === 0) {
          res.sendStatus(404);
        } else {
          res.status(200).json(offers);
        }
        break;
      }
      case "HomeCarrousel": {
        // Si type est "HomeCarrousel" ne récupère que les 5 dernières offres postées
        const offers = await tables.offer.readLasts();
        res.status(200).json(offers);
        break; // indispensable dans un switch
      }
      default: {
        // Par défaut, récupérer toutes les offres
        const offers = await tables.offer.readAll(req.auth);
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
    const offer = await tables.offer.read(req.params.id, req.auth);
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
