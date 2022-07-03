const { Router } = require("express");
const bulkCountryBD = require("../modules/bulkCountryBD");
const idSearchCountry = require("../modules/idSearchCountry");
const searchCountry = require("../modules/searchCountry");
//const getCountry = require("../modules/getCountry");
const router = Router();

router.get('/api', async (req, res, next) => {
    try {

        let resultados = await searchCountry();
        res.json(resultado);

    }catch (err) {
        next(err);
    }
})

router.get('/api/countries', async (req, res, next) => {
    try {

        let { name } = req.query;
        let resultado = await searchCountry(name);
        res.json(resultado);
    } catch (err){
        next(err);
    }
})

router.get('/api/countries/:idPais', async (req, res, next)=>{
    try{

        let { idPais } = req.params;
        let resultado = await idSearchCountry(idPais);
        res.json(resultado);
    } catch (err) {
        next(err);
    }
})

module.exports = router;