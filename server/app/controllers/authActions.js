// Import access to database tables
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");
const { verifyPassword } = require("../services/auth");

const { APP_SECRET } = process.env;

const login = async (req, res, next) => {
  try {
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
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};