const express = require("express");

const router = express.Router();
const upload = require("../../../services/upload");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import profil-related actions

const {
  browse,
  read,
  edit,
  editCV,
  checkProfile,
} = require("../../../controllers/profilActions");
const { checkCookie } = require("../../../services/verification/cookie");

const validateProfil = require("../../../services/validateProfil");

router.get("/", browse);

router.get("/:id", read);

router.get("/:id/completed", checkProfile);

router.put("/:id", validateProfil, edit);

router.put("/:id/CV", checkCookie, upload.single("CV"), editCV);

/* ************************************************************************* */

module.exports = router;
