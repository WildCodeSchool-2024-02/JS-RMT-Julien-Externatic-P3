const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  browseByConsultant,
  add
} = require("../../../controllers/offerActions");

router.get("/", browse);
router.get("/consultant", browseByConsultant);
router.get("/:id", read);
router.post("/", add);

module.exports = router;
