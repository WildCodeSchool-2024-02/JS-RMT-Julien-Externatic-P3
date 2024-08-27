const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import technology-related actions
const { browse } = require("../../../controllers/technologyActions");

// Route to get a list of technologies
router.get("/", browse);

// Route to get a specific technology by ID
// router.get("/:id", read);

// Route to add a new technology
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;