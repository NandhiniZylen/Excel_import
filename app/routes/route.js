const express = require("express");
const api = express.Router();


const dataRoute= require('./route/dataRoute')

api.use("/data",dataRoute)


module.exports =api;