const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const {
  add,
  destroy,
} = require("../../../controllers/technologyCandidateActions");

// Route to get a list of users consultant

router.post("/", add);
router.delete("/", destroy);
// Route to get a specific user by ID
// router.get("/:id", read);

// // Route to add a new user
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
