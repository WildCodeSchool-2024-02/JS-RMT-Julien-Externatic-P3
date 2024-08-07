const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  browseByConsultant,
} = require("../../../controllers/offerActions");

router.get("/", browse);
router.get("/consultant", browseByConsultant);
router.get("/:id", read);

module.exports = router;
