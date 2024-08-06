const express = require("express");

const router = express.Router();

const { browse, read, browseOffersByConsultant } = require("../../../controllers/offerActions");

router.get("/", browse);
router.get("/:id", browseOffersByConsultant);
router.get("/:id", read);

module.exports = router;

