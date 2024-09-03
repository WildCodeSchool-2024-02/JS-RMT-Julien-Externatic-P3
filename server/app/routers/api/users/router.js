const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const {
  browse,
  readFavories,
  readTechnologies,
  add,
  destroy,
} = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");
const validateUser = require("../../../services/validateUser");
const { login, logout } = require("../../../controllers/authActions");
const { checkUser } = require("../../../services/verification/cookie");
// Route to get a list of users consultant

router.get("", browse);
router.get("/:id/favories", checkUser, readFavories);
router.get("/:id/technologies", checkUser, readTechnologies);
router.post("/register", validateUser, hashPassword, add);
router.post("/login", login);
router.post("/logout", checkUser, logout);
router.delete("/:id", checkUser, destroy);
// Route to get a specific user by ID

// // Route to add a new user
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
