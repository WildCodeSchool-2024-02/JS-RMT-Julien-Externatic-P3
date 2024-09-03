const express = require("express");

const router = express.Router();


const { browseByOfferId } = require("../../../controllers/candidacyActions");

const {
  browse,
  read,
  add,
  destroy,
} = require("../../../controllers/offerActions");

const validateOffer = require("../../../services/validateOffer");

router.get("/", browse);
router.get("/:id", read);
router.post("/", validateOffer, add);
router.delete("/:id", destroy);

router.get("/:offerId/candidacies", browseByOfferId);

module.exports = router;
