const { conn } = require('../db');
const axios = require('axios');
const { Country } = conn.models;

const bulkCountryBD = async ()=> {

    const data = await axios.get('https://restcountries.com/v3.1/all');
    const apiData = data.data.forEach(async(dato)=> {

        let country = (dato.name.common).toLowerCase();
        country = country.split(' ');

        let countryInfo = country.join('_');
        country = country.join('-');

        Country.create({
            id: dato.cca3,
            name: dato.name.common.toUpperCase() === 'ÅLAND ISLANDS' ? 'ALAND ISLANDS':dato.name.common.toUpperCase() === 'RÉUNION' ? 'REUNION':dato.name.common.toUpperCase(),
            flag: dato.flags.png ? dato.flags.png : null,
            shield: dato.coatOfArms.png ? dato.coatOfArms.png : null,
            map: `https://geology.com/world/${country}-map.gif`,
            info: `https://en.wikipedia.org/wiki/${countryInfo}`,
            continent: dato.region ? dato.region : null,
            capital: dato.capital?.[0] ? dato.capital[0] : dato.capital ? dato.capital : 'Sin dato',
            region: dato.subregion ? dato.subregion : null,
            area: dato.area,
            population: dato.population
        });
    });
}
module.exports = bulkCountryBD;