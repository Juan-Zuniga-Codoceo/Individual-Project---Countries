const { createActivity } = require("../services/activities.services");

const createActivityController = async (req, res) => {
    try {
        const { activity, countries } = req.body;
        const newActivity = await createActivity(activity, countries);
        if (!newActivity) {
            throw new Error("Activity not created");
        }
        res.json(newActivity);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createActivityController };