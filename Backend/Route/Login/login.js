const express = require('express');
const Route = express.Router();
const {logincontroll} = require('../../controller/authcontroller');
const { refreshToken } = require('../../controller/jwt');


Route.post('/',logincontroll);

// Refresh token endpoint
Route.post('/refresh-token',refreshToken);
  



module.exports=Route;