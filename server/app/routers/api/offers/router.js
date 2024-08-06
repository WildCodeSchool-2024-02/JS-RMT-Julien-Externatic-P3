const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/offerActions");
const {
  browseOffersByConsultant,
} = require("../../../controllers/offerActions");

router.get("/", browse);
router.get("/:id", browseOffersByConsultant);

module.exports = router;
