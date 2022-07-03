const { conn } = require("../db");
const { Activity } = conn.models;

const bulkActivityBD = async (para) => {
    if(!para.country || !para.name) return null;
    if(!await findActivity({ name: para.name })) {

        await Activity.create({
            name: para.name,
            difficulty: para.difficulty,
            duration: para.duration,
            season: para.season
        })
    }
    let reg = await findActivity({ name: para.name });
    para.country.forEach(async(el)=>{
        await reg.addCountry(el)
    })
}

const findActivity = async (act)=>{
    let reg = await Activity.findOne({ where: act });
    return reg;
}

module.exports = bulkActivityBD;