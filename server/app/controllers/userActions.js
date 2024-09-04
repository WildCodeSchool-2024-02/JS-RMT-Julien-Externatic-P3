// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const { query } = req;
    const { filter } = req.query;
    let users = [];
    // role_id === 2 soit consultant
    if (query.role_id === "2") {
      // cas de la page d'accueil
      if (query.data === "front") {
        users = await tables.user.readAllConsultantFront(query.role_id);
      } else {
        users = await tables.user.readAllConsultantBack(query.role_id, filter);
      }
      // cas de l'admin
    } else {
      users = await tables.user.readAll(query.role_id);
    }
    res.status(200).json(users);
    // Respond with the users in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const readFavories = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const favories = await tables.user.readFavories(userId);

    res.status(200).json(favories);
  } catch (err) {
    next(err);
  }
};

const readCandidacies = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const candidacies = await tables.user.readCandidacies(userId);
    res.status(200).json(candidacies);
  } catch (err) {
    next(err);
  }
};

const readTechnologies = async (req, res, next) => {
  try {
    // Fetch a specific profil from the database based on the provided ID
    const userTech = await tables.user.readTechnology(req.params.id);
    // If the profil is not found, respond with HTTP 404 (Not Found)
    if (userTech.length === 0) {
      res.sendStatus(404);
    } else {
      // Otherwise, respond with the user's technologies in JSON format
      res.status(200).json(userTech);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(user);
    const profil = {
      user_id: insertId, // Utilisez l'ID de l'utilisateur nouvellement créé
      firstname: user.firstname, // Assurez-vous que les champs existent dans 'user'
      lastname: user.lastname, // Assurez-vous que les champs existent dans 'user'
    };

    // Insérer le profil dans la base de données
    await tables.profil.create(profil);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  try {
    // Delete the program from the database
    await tables.user.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// Ready to export the controller functions
module.exports = {
  browse,
  readFavories,
  readCandidacies,
  readTechnologies,
  // edit,
  add,
  destroy,
};
