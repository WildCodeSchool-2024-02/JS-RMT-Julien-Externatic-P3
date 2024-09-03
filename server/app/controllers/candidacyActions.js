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

const add = async (req, res, next) => {
  // Extract the candidacy data from the request body
  const candidacy = {
    candidate_id: 1,
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
// Export the controller functions
module.exports = { browseByOfferId, add };
