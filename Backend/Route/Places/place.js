const express = require('express');
const { authMiddleware } = require('../../controller/jwt');
const { uploadPlaces } = require('../../controller/placesController');

const Route = express.Router();



Route.post('/',authMiddleware,uploadPlaces);





module.exports=Route;