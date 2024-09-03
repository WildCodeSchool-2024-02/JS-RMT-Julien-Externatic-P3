const express = require("express");

const router = express.Router();

const { optionalAuth } = require("../../services/verification/cookie");
/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
router.use(optionalAuth);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const companiesRouter = require("./companies/router");

router.use("/companies", companiesRouter);

const profilsRouter = require("./profils/router");

router.use("/profils", profilsRouter);

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

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

const technologyRouter = require("./technology/router");

router.use("/technology", technologyRouter);

const favoriteRouter = require("./favorite/router");

router.use("/favorite", favoriteRouter);

module.exports = router;
