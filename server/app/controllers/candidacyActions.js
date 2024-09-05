const tables = require("../../database/tables");

// Action to browse candidacies by offer ID
const browseByOfferId = async (req, res, next) => {
  try {
    const { offerId } = req.params;
    const candidacies = await tables.candidacy.readAllByOfferId(offerId);
    res.status(200).json(candidacies);
  } catch (err) {
    next(err);
  }
};

// Action pour récupérer les candidatures par utilisateur (user ID)
const browseByUserId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const candidacies = await tables.candidacy.readAllByUserId(userId);
    res.status(200).json(candidacies);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  // Extract the candidacy data from the request body
  const candidacy = {
    candidate_id: req.auth.id,
    offer_id: req.body.offer_id,
    motivation: req.body.motivation,
  };

  try {
    // Insert the candidacy into the database
    const insertId = await tables.candidacy.create(candidacy);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted candidacy
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const candidacy = req.body;
  try {
    const affectedRows = await tables.candidacy.update(candidacy);

    if (affectedRows > 0) {
      res.status(200).json(affectedRows);
    } else {
      res.status(404).json({ message: "Candidacy not found or not updated" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browseByOfferId, browseByUserId, add, edit };
