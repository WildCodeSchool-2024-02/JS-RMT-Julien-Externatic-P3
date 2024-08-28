const express = require("express");

const router = express.Router();

// Import favorite-related actions from the controller
const { add, read, destroy } = require("../../../controllers/favoriteActions");

// Route to add a new favorite
router.post("/", add);

// Route to get favorites for a specific candidate
router.get("/:candidateId", read);

// Route to delete a favorite
router.delete("/:candidateId/:offerId", destroy);

module.exports = router;