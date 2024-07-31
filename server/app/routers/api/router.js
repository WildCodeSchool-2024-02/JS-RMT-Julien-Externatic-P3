const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);


const profilsRouter = require("./profils/router");

router.use("/profils", profilsRouter);

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);


/* ************************************************************************* */

module.exports = router;
