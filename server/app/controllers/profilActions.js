// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    if (req.query.type === "byConsultant") {
      const profils = await tables.profil.readAllBy(req.query.consultantId);
      res.status(200).json(profils);
    } else {
      const profils = await tables.profil.readAll();
      res.status(200).json(profils);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific profil from the database based on the provided ID
    const profil = await tables.profil.read(req.params.id);
    // If the profil is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the profil in JSON format
    if (profil == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(profil);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the profil data from the request body and params
  const profil = { ...req.body, id: req.params.id };

  try {
    // Update the profil in the database
    await tables.profil.update(profil);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the profil data from the request body
  const profil = req.body;

  try {
    // Insert the profil into the database
    const insertId = await tables.profil.create(profil);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted profil
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  // destroy,
};
