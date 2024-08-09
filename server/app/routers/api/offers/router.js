const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  browseByConsultant,
  add,
} = require("../../../controllers/offerActions");

const validateOffer = require("../../../services/validateOffer");

router.get("/", browse);
router.get("/consultant", browseByConsultant);
router.get("/:id", read);
router.post("/", validateOffer, add);

module.exports = router;
