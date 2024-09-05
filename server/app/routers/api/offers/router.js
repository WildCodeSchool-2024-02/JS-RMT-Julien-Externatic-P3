const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/offerActions");
const { browseByOfferId } = require("../../../controllers/candidacyActions");

const validateOffer = require("../../../services/validateOffer");

const {
  checkConsultant,
  checkUser,
} = require("../../../services/verification/cookie");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", checkUser, checkConsultant, validateOffer, edit);
router.post("/", checkUser, checkConsultant, validateOffer, add);
router.delete("/:id", checkUser, checkConsultant, destroy);

router.get("/:offerId/candidacies", browseByOfferId);

module.exports = router;
