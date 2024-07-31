const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/offerActions");

router.get("/", browse);

module.exports = router;