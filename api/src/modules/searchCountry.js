const { conn } = require("../db");
const { Country, Activity } = conn.models;
const { Op } = require('sequelize')

const searchCountry = async (country) => {
    if(!country) {

        let control = await Country.findAll({include: [Activity]});
        return control;
    } else {
        country = country.toUpperCase();

        let control = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${country}`
                }
            },
            include: [Activity],
        })
        return control;
    }
}

module.exports = searchCountry;