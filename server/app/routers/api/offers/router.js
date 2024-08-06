const express = require("express");

const router = express.Router();


const { browse, add, read } = require("../../../controllers/offerActions");


router.get("/", browse);
router.post("/", add);
router.get("/:id", read);

module.exports = router;
