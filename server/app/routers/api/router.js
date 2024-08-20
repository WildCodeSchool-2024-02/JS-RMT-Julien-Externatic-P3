const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const companiesRouter = require("./companies/router");

router.use("/items", itemsRouter);
router.use("/companies", companiesRouter);

const profilsRouter = require("./profils/router");

router.use("/profils", profilsRouter);

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);
router.use("/signUp", usersRouter);
router.use("/login", usersRouter);

const contractRouter = require("./contract/router");

router.use("/contract", contractRouter);

const workTimeRouter = require("./workTime/router");

router.use("/workTime", workTimeRouter);

const workFormatRouter = require("./workFormat/router");

router.use("/workFormat", workFormatRouter);

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

const studyLevelRouter = require("./studyLevel/router");

router.use("/studyLevel", studyLevelRouter);

module.exports = router;
