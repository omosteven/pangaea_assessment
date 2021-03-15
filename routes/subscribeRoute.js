const router = require("express");

const baseRouter = router();

const subscribeRouter = router();

const SubscribeController = require("../controllers/subscribeController");

subscribeRouter.post("*", SubscribeController.subscribe);

baseRouter.use("/", subscribeRouter);

module.exports = baseRouter;
