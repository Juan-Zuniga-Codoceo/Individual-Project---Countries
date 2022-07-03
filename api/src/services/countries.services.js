const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const saveCountriesFromApi = async () =>{
    try {
        const url = "https://restcountries.com/v3/all";
        const response = await axios.get(url);

        // response.data.forEach(async (country) => {
        // console.log(country.capital);
        // )};
        const country = response.data.map(country =>{
            return {
                id: country.cca3,
                name: country.name.common,
                image: country.flags[0],
                continent: country.region,
                subregion: country.subregion,
                capital: country.capital ? country.capital[0] : "",
                population: country.population,
                area: country.area,
            };
        });

        await Country.bulkCreate(countries);
    } catch (error){
        console.log(error);
    }
};

const getCountries = async () => {
    try {
      const countries = await Country.findAll({
        attributes: ["id", "name", "image", "continent", "population"],
      });
      return countries;
    } catch (error) {
      console.log(error);
    }
  };

const getCountriesById = async (id) => {
    try {
        const country = await Country.findByPk(id.toUpperCase(),{
            attributes: [
                "id",
                "name",
                "image",
                "continent",
                "capital",
                "subregion",
                "population",
                "area"
            ],
            include: [
                {
                    model: activity,
                    attributes: ["id","name","difficulty","duration","season"],
                },
            ],
        });
        if(!country){
            throw new Error("Country not found");
        }
        return country;
    } catch (error){
        throw error;
    }
};

const getCountriesByName = async (name) => {
    try {
        const countries = await Country.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`,
                },
            },
            attributes: ["id","name"."image","continent","population"],
        });
        if(!countries){
            throw new Error("Country not found");
        }
        return countries;
    } catch (error){
        throw error;
    }
};

module.exports = {
    saveCountriesFromApi,
    getCountries,
    getCountriesByName,
    getCountriesById, 
}