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
} = require("../../../controllers/profilActions");
const {
  checkConsultant,
  checkUser,
} = require("../../../services/verification/cookie");

const validateProfil = require("../../../services/validateProfil");

router.get("/", checkUser, checkConsultant, browse);

router.get("/:id", checkUser, read);

router.put("/:id", checkUser, validateProfil, edit);

router.put("/:id/CV", checkUser, upload.single("CV"), editCV);

/* ************************************************************************* */

module.exports = router;
