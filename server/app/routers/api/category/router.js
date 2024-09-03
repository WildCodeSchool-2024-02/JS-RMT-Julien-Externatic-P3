const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse } = require("../../../controllers/categoryActions");
const { checkUser } = require("../../../services/verification/cookie");

// Route to get a list of items
router.get("/", checkUser, browse);

/* ************************************************************************* */

module.exports = router;
