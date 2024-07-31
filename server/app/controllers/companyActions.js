// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const company = await tables.company.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (company == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(company);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  // browse,
  read,
  // edit,
  // add,
  // destroy,
};
