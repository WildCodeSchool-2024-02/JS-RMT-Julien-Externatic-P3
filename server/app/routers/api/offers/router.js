const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/offerActions");

const validateOffer = require("../../../services/validateOffer");

const { checkCookie } = require("../../../services/verification/cookie");

router.get("/", checkCookie, browse);
router.get("/:id", checkCookie, read);
router.post("/", validateOffer, add);

module.exports = router;
