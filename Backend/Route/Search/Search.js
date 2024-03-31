const express = require('express');
const { roomDetils } = require('./RoomDetails');
const Route = express.Router();



// search Room By ID for user
Route.get('/searchRoom', roomDetils, (req, res) => {
    const data = req.roomDetails
    console.log("day",data);
    res.status(200).json({ status: 'success', roomDetails: data })
});
module.exports = Route