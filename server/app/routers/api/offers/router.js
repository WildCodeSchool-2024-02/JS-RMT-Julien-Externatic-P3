const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/offerActions");

router.get("/", browse);

const { read } = require("../../../controllers/offerActions");

router.get("/:id", read);

module.exports = router;