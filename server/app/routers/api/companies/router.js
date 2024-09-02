const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* *********************************** */
// Import company-related actions
const { browse, read } = require("../../../controllers/companyActions");
const { checkCookie } = require("../../../services/verification/cookie");

// Route to get a list of companies
router.get("/", checkCookie, browse);
// Import companies-related actions

// Route to get a specific company by ID
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
