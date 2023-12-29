const express = require("express");
const router = express.Router();
const EventsController = require("../controllers/EventsController");

module.exports = () => {
    router.get("/", EventsController.index);

    router.post("/add", EventsController.create);

    router.delete("/delete/:id", EventsController.delete);

    return router;
};
