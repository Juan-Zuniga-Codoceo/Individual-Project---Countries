const express = require('express');
const router = express.Router();
const {
    getCountriesController,
    getCountryByIdController,
} = require("../controllers/countries.controllers")

router.get("/", getCountriesController);
router.get("/:id", getCountryByIdController);

module.exports = router;