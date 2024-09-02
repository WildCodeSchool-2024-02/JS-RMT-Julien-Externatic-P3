const express = require("express");

const { checkCookie } = require("../../../services/verification/cookie");

const router = express.Router();

// Import favorite-related actions from the controller
const { add, read, destroy } = require("../../../controllers/favoriteActions");

// Route to add a new favorite
router.post("/", checkCookie, add);

// Route to get favorites for a specific candidate
router.get("/:candidateId", checkCookie, read);

// Route to delete a favorite
router.delete("/:offerId", checkCookie, destroy);

module.exports = router;
