const express = require('express')
const { authMiddleware } = require('../../controller/jwt')
const {booknow} = require('../../controller/booknowcontroller')
const Route = express()

Route.post('/',authMiddleware,booknow)

module.exports = Route