// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation

// The R of BREAD - Read operation

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body

  const technoToOffer = req.body;

  try {
    // Insert the item into the database
    const affected = await tables.technologyOffer.create(technoToOffer);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ affected });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

const destroy = async (req, res, next) => {
  const technoToOffer = req.body;
  try {
    // Delete the program from the database
    await tables.technologyOffer.delete(technoToOffer);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  // browse,
  // read,
  // edit,
  add,
  destroy,
};
