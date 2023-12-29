const EventModel = require("../models/EventModel");

module.exports = {
    index: async (req, res, next) => {
        try {
            const events = await EventModel.find({});
            res.json(events);
        } catch (err) {
            return res.status(500).json({
                message: "Error while fetching Events",
                error: err.message,
            });
        }
    },

    create: async (req, res, next) => {
        try {
            const event = new EventModel({
                name: req.body.name,
                event: req.body.event,
                city: req.body.city,
            });

            const savedEvent = await event.save();

            return res.status(201).json(savedEvent);
        } catch (err) {
            return res.status(500).json({
                message: "Error while creating Events",
                error: err.message,
            });
        }
    },

    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            const deletedEvent = await EventModel.findByIdAndDelete(id);

            if (!deletedEvent) {
                return res.status(404).json({
                    message: "Event not found",
                });
            }

            return res.status(200).json({
                message: "Event deleted successfully",
                deletedEvent,
            });
        } catch (err) {
            return res.status(500).json({
                message: "Error while deleting Event",
                error: err.message,
            });
        }
    },
};
