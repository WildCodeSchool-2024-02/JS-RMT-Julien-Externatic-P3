const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/offerActions");

const validateOffer = require("../../../services/validateOffer");

const {
  checkConsultant,
  checkUser,
} = require("../../../services/verification/cookie");

router.get("/", browse);
router.get("/:id", read);
router.post("/", checkUser, checkConsultant, validateOffer, add);

module.exports = router;
