// routes/candidacyRoutes.js
const express = require("express");

const router = express.Router();

// Import the action methods from the candidacyActions controller
const { browseAll } = require("../../../controllers/candidacyActions");

// Define the route for getting all candidacies
// Example route: GET /api/candidacies
router.get("/api/candidacies", browseAll);

module.exports = router;
