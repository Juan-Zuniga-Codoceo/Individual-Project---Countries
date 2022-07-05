const {
    getCountries,
    getCountryById,
    getCountryByName,
    getCountriesByName,
} = require("../services/countries.services");

const getCountriesController = async (req, res) => {
    try {
        if (req.query.name){
            const countries = await getCountriesByName(req.query.name);
            res.status(200).json(countries);
        } else {
            const countries = await getCountries();
            res.status(200).json(countries);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const getCountryByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const country = await getCountryById(id);
        if (!country) {
            throw new Error("Country not found");
        }
        res.json(country);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCountriesController,
    getCountryByIdController,
};