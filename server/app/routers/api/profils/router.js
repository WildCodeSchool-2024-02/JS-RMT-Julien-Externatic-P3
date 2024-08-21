const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import profil-related actions

const { browse, read, edit } = require("../../../controllers/profilActions");

const validateProfil = require("../../../services/validateProfil");

router.get("/", browse);

router.get("/:id", read);

router.put("/:id", validateProfil, edit);

/* ************************************************************************* */

module.exports = router;
