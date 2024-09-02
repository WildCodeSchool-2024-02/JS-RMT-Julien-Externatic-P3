// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    if (req.query.type === "ByCandidat") {
      // Fetch all technologies associated with the candidate
      const technologiesByCandidat = await tables.technology.readAllByCandidat(
        req.query.id
      );
      res.status(200).json(technologiesByCandidat);
    } else if (!req.query.type) {
      // Si aucun type n'est spécifié, récupère toutes les technologies
      const allTechnologies = await tables.technology.readAll();
      return res.status(200).json(allTechnologies);
    }
    // Handle the case when req.query.type is not "ByCandidat"
    return res.status(400).json({ message: "Invalid query type" });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    return next(err);
  }
};

// The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
//     // Fetch a specific technology from the database based on the provided ID
//     const technology = await tables.technology.read(req.params.id);

//     // If the technology is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the technology in JSON format
//     if (technology == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(technology);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const { candidateId, techno } = req.body;
  try {
    // Insert the item into the database
    const insertId = await tables.technology.create(techno.tech);

    await tables.technologyCandidate.create(insertId, candidateId);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

//   try {
//     // Insert the technology into the database
//     const insertId = await tables.technology.create(technology);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted technology
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  // read,
  // edit,
  add,
  // destroy,
};
