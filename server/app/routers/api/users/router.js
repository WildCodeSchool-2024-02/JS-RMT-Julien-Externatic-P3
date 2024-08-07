const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const { browseConsultant, add } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");

// Route to get a list of users consultant
router.get("/consultants", browseConsultant);
router.post("/user", hashPassword, add);

// Route to get a specific user by ID
// router.get("/:id", read);

// // Route to add a new user
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
