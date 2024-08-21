// Import access to database tables
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");
const { verifyPassword } = require("../services/auth");

const { APP_SECRET } = process.env;

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmail(req.body.mail);

    const verified = user
      ? await verifyPassword(user.hashed_password, req.body.password)
      : false;
    if (verified) {
      delete user.hashed_password;
      const token = jwt.sign(user, APP_SECRET);
      res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })
        .json(jwt.verify(token, APP_SECRET));
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
