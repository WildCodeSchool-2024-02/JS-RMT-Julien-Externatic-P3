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

const optionalAuth = (req, res, next) => {
  if (req.cookies.token) {
    checkCookie(req, res, next);
  } else {
    req.auth = null;
    next();
  }
};

const checkConsultant = (req, res, next) => {
  if (req.auth.role_id === 2) {
    next();
  }
  res.sendStatus(403);
};

const checkAdmin = (req, res, next) => {
  if (req.auth.role_id === 3) {
    next();
  }
  res.sendStatus(403);
};

module.exports = { checkCookie, checkConsultant, checkAdmin, optionalAuth };
