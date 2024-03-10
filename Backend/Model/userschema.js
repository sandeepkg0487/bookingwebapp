const { mongoose, Schema, model, Model } = require('mongoose');
const bcrypt = require('bcrypt');


const userschema = new Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    created_on: {
        type: Date,
        default: Date.now
    }

})
const usermodel = model('Login123', userschema);




const addplaces = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    placeName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    noOfSlots: {
        type: String,
        required: true,
    },
    discription: {

        type: String,
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    images: [{

        cloudinary_id: {
            type: String,
            required: true
        },

        profile_img: {
            type: String,
            required: true
        },
    }],
    totalAmount:{
        required:true,
        type:Number
    }

})
const placeModel = model('places', addplaces)



const bookingschema = new Schema({
    userId:{
        required:true,
        type:String
    },
    placeId:{
        required:true,
        type:String
    },
    startFrom:{
        required:true,
        type:Date
    },
    endsOn:{
        required:true,
        type:Date
    },
    quantity:{
        required:true,
        type:Number
    },
    amountTobePayed:{
        required:true,
        type:Number
    }
})
const bookingModel = model('booking',bookingschema)

module.exports = { usermodel, placeModel,bookingModel }