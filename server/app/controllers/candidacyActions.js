// actions/CandidacyActions.js
const tables = require("../../database/tables");

// Action to browse candidacies by offer ID
const browseByOfferId = async (req, res, next) => {
  try {
    const { offerId } = req.params; // Get the offer ID from the request parameters
    const candidacies = await tables.candidacy.readAllByOfferId(offerId); // Fetch all candidacies for the given offer ID
    res.status(200).json(candidacies); // Send the response with the fetched candidacies
  } catch (err) {
    next(err); // Pass any error to the next middleware
  }
};

// Export the controller functions
module.exports = { browseByOfferId };
