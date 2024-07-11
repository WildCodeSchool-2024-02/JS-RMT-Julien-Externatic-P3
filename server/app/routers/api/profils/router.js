const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import profil-related actions
const { edit } = require("../../../controllers/profilActions");

// // Route to get a list of profils
// router.get("/", browse);

// // Route to get a specific profil by ID
// router.get("/:id", read);

// // Route to add a new profil
// router.post("/", add);

router.put("/:id", edit)

/* ************************************************************************* */

module.exports = router;