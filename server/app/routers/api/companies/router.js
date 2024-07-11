const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import companies-related actions
const { browse, read, add } = require("../../../controllers/companyActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific company by ID
router.get("/:id", read);

// Route to add a new company
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
