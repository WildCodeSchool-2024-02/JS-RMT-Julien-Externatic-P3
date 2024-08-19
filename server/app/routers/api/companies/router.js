const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* *********************************** */
// Import company-related actions
const {
  browse,
  browseList,
  read,
} = require("../../../controllers/companyActions");

// Route to get a list of companies
router.get("/", browse);
router.get("/minList", browseList);
// Import companies-related actions

// Route to get a specific company by ID
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
