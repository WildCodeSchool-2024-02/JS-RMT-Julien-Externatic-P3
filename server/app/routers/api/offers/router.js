const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/offerActions");

const validateOffer = require("../../../services/validateOffer");

const { optionalAuth } = require("../../../services/verification/cookie");

router.get("/", optionalAuth, browse);
router.get("/:id", optionalAuth, read);
router.post("/", validateOffer, add);

module.exports = router;
