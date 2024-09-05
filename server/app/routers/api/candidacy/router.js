// routes/candidacyRoutes.js
const express = require("express");

const router = express.Router();

// Import the action methods from the candidacyActions controller
const { add, edit } = require("../../../controllers/candidacyActions");
const { checkUser } = require("../../../services/verification/cookie");

// Define the route for getting all candidacies
// Example route: GET /api/candidacies

router.post("/", checkUser, add);
router.put("/", checkUser, edit);

module.exports = router;
