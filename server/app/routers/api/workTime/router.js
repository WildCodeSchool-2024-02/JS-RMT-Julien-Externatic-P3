const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse } = require("../../../controllers/workTimeActions");
const {
  checkConsultant,
  checkUser,
} = require("../../../services/verification/cookie");
// Route to get a list of items
router.get("/", checkUser, checkConsultant, browse);

/* ************************************************************************* */

module.exports = router;
