const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const {
  browseConsultant,
  browseCandidate,
  add,
} = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");
const validateUser = require("../../../services/validateUser");
const authActions = require("../../../controllers/authActions");

// Route to get a list of users consultant

router.get("", browseConsultant);
router.get("/candidates", browseCandidate);
router.post("/register", validateUser, hashPassword, add);
router.post("/login", authActions.login);
// Route to get a specific user by ID
// router.get("/:id", read);

// // Route to add a new user
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
