const jwt = require("jsonwebtoken");

const checkCookie = (req, res, next) => {
  const decoded = jwt.verify(req.cookies.token, process.env.APP_SECRET);
  if (decoded) {
    req.auth = decoded;
    next();
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

const checkUser = (req, res, next) => {
  if (req.auth) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const checkConsultant = (req, res, next) => {
  if (req.auth.role_id === 2 || req.auth.role_id === 3) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const checkAdmin = (req, res, next) => {
  if (req.auth && req.auth.role_id === 3) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = {
  checkCookie,
  checkConsultant,
  checkAdmin,
  optionalAuth,
  checkUser,
};
