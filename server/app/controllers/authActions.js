// Import access to database tables
const tables = require("../../database/tables");
const { verifyPassword } = require("../services/auth");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmail(req.body.mail);

    const verified = user
      ? await verifyPassword(user.hashed_password, req.body.password)
      : false;
    if (verified) {
      res.json(user);
    } else {
      // Respond with the user in JSON format (but without the hashed password)

      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  login,
};
