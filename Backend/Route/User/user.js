const express = require('express');
const { authMiddleware } = require('../../controller/jwt');
const { bookingModel, usermodel } = require('../../Model/userschema');

const Route = express()

// to show user bookings 
Route.get('/getBooking', authMiddleware, async (req, res) => {
  console.log('req.path',req.path);
    const userId = req.jwt.userId
    try {
        const result = await bookingModel.find({ userId: userId })
        if(!result){
        return    res.status(200).json({message:"no booking yet "})
        } 
        return res.status(200).json({message:'success',data:result})

    } catch (error) {

    }

});


// user Details edit/
Route.patch('/editProfile', authMiddleware, async (req, res) => {
    const userId = req.jwt.userId
    const {firstname,lastname,phone} = req.body
    try {
        const user = await usermodel.findOneAndUpdate(
          { _id:userId },
          { $set: { firstname, lastname, phone } },
          { new: true }
        );
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        return res.json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }

});

module.exports = Route