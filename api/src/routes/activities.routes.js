const express = require('express');
const router = express.Router();
const {
    createActivityController,
} = require("../controllers/activities.controllers");

router.post("/", createActivityController);

module.exports = router;