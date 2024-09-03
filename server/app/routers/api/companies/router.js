const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* *********************************** */
// Import company-related actions
const { browse, read } = require("../../../controllers/companyActions");
const {
  checkUser,
  checkConsultant,
} = require("../../../services/verification/cookie");

// Route to get a list of companies
router.get("/", checkUser, checkConsultant, browse);
// Import companies-related actions

// Route to get a specific company by ID
router.get("/:id", checkUser, read);

/* ************************************************************************* */

module.exports = router;
