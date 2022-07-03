const { Router } = require("express");
const server = require("../app");
const bulkActivityBD = require("../modules/bulkActivityBD");
const express = require("express");
const searchActivity = require("../modules/searchActivity");

const router = Router();
router.use(express.json());

router.post('/api/activity', async (req, res) => {
    let para = req.body;

    await bulkActivityBD(para);
    res.json({response:'correcto'});
})

router.get('/api/activity', async (req, res,next) => {

    try {
        let { name } = req.query;
        let resultado = await searchActivity(name);
        res.json(resultado);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;