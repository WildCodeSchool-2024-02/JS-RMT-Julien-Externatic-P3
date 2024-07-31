const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import companies-related actions
const { read } = require("../../../controllers/companyActions");

// Route to get a specific company by ID
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
