const { conn } = require("../db");
const { Country, Activity } = conn.models;
const { Op } = require('sequelize')

const idSearchCountry = async(id)=> {

    if(!id || typeof id === 'number'){
        return null;
    } else{
        id = id.toUpperCase();

        let control = await Country.findAll({
            where: {
                id: {
                    [Op.iLike]: `${id}`
                }
            },
            include: [Activity],
        })
        return control;
    }
}

module.exports = idSearchCountry;