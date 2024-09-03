// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    if (req.query.type === "byConsultant") {
      const profils = await tables.profil.readAllBy(req.auth.id);
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
    let profil;
    if (req.query.type === "mine") {
      profil = await tables.profil.read(req.auth.id);
    } else {
      profil = await tables.profil.read(req.params.id);
    }

    if (profil == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(profil);
    }
  } catch (err) {
    next(err); // Pass any errors to the error-handling middleware
  }
};

const checkProfile = async (req, res, next) => {
  const userId = req.auth.id;
  try {
    const profileData = await tables.profil.isProfileComplete(userId);

    // Convertir les valeurs de bigint en nombres entiers
    const hasDescription = Number(profileData.has_description);
    const hasPhone = Number(profileData.has_phone);
    const hasCity = Number(profileData.has_city);
    const hasCV = Number(profileData.has_cv);
    const hasGithub = Number(profileData.has_github);
    const hasLinkedin = Number(profileData.has_linkedin);
    const hasTechnologies = Number(profileData.has_technologies);

    // Vérifier si toutes les valeurs sont égales à 1
    if (
      hasDescription === 1 &&
      hasPhone === 1 &&
      hasCity === 1 &&
      hasCV === 1 &&
      hasGithub === 1 &&
      hasLinkedin === 1 &&
      hasTechnologies === 1
    ) {
      // Le profil est complet
      res.status(200).json({ message: "Profile is complete." });
    } else {
      // Le profil est incomplet
      res.status(400).json({
        error:
          "Profile is incomplete or no technologies found. Please complete your profile and add technologies before proceeding.",
      });
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the profil data from the request body and params
  const profil = { ...req.body, id: req.auth.id };

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
    res.status(204).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const editCV = async (req, res, next) => {
  const cvUrl = `upload/CV/${req.file.filename}`;

  try {
    const result = await tables.profil.updateCV({ cv: cvUrl }, req.auth.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Profil non trouvé." });
    }

    return res.sendStatus(204);
  } catch (err) {
    return next(err);
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
  editCV,
  checkProfile,
};
