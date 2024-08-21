const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const { browse, add } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");
const validateUser = require("../../../services/validateUser");

// Route to get a list of users consultant

router.get("", browse);
router.post("/", validateUser, hashPassword, add);
// Route to get a specific user by ID
// router.get("/:id", read);

// // Route to add a new user
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
