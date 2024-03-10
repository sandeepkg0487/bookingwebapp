const express = require('express');
const Route = express.Router();
const {logincontroll} = require('../../controller/authcontroller')


Route.post('/',logincontroll);




module.exports=Route;