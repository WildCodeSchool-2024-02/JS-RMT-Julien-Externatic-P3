const express = require("express");

const router = express.Router();

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

module.exports = router;
