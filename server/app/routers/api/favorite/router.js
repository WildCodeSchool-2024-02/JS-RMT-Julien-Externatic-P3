const express = require("express");

const router = express.Router();

// Import favorite-related actions from the controller
const { add, read, destroy } = require("../../../controllers/favoriteActions");
const { checkUser } = require("../../../services/verification/cookie");
// Route to add a new favorite
router.post("/", checkUser, add);

// Route to get favorites for a specific candidate
router.get("/:candidateId", checkUser, read);

// Route to delete a favorite
router.delete("/:offerId", checkUser, destroy);

module.exports = router;
