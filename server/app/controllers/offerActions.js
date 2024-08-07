const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const offers = await tables.offer.readAll();
    // Respond with the items in JSON format
    res.status(200).json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const browseByConsultant = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const offersByConsultant = await tables.offer.readAllByConsultant(7);
    if (offersByConsultant.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(offersByConsultant);
    }
    // Respond with the items in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
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

module.exports = {
  browse,
  browseByConsultant,
  read,
};
