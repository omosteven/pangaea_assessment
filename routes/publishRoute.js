const router = require("express");

const baseRouter = router();

const publishRouter = router();

const PublishController = require("../controllers/publishController");

publishRouter.post("*", PublishController.publish);

baseRouter.use("/", publishRouter);

module.exports = baseRouter;
