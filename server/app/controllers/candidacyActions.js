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

module.exports = { browseByOfferId };