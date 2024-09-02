const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/offerActions");
const { browseByOfferId } = require("../../../controllers/candidacyActions");

const validateOffer = require("../../../services/validateOffer");

router.get("/", browse);
router.get("/:id", read);
router.post("/", validateOffer, add);

router.get("/:offerId/candidacies", browseByOfferId);

module.exports = router;
