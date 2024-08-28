const jwt = require("jsonwebtoken");

const checkCookie = (req, res, next) => {
  if (req.cookies.token) {
    const decoded = jwt.verify(req.cookies.token, process.env.APP_SECRET);
    if (decoded) {
      req.auth = decoded;
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};

module.exports = { checkCookie };
