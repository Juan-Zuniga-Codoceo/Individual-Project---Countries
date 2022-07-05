const { conn } = require("../db");
const { Activity, Country } = conn.models;
const { Op } = require('sequelize')

const searchActivity = async(activity) => {
    if(!activity){

        let control = await Activity.findAll();
        return control;

    } else{
        activity = activity.toLowerCase();
    }
}