const { mongoose, Schema, model, Model } = require('mongoose');
const bcrypt = require('bcrypt');


const userschema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
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
    },
    phone: {
        type: String,
        require: true
    },
    bookings: [String]

})
const usermodel = model('Login123', userschema);


const hotelSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    hotelName: {
        type: String,
        required: true,
    },
    location: {
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


})
const hotel = model('hotels', hotelSchema)

const roomSchema = new Schema({
    hotelid: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    roomType: {
        type: String
    },
    numberOfRooms: {
        type: Number
    },
    price: {
        type: Number,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    roomStructure: [{
        roomNumber: {
            type: Number,
        },
       

        booking:[{
            start:Date,
            end:Date,
            userId:String,
            name:String,
            phone:Number,
            orderNote:String,
        }]
    }],
    extras: [
        String,
    ],
    images: [{

        cloudinary_id: {
            type: String,
            required: true
        },

        RoomImage: {
            type: String,
            
        },
    }],


})
const rooms = model('room', roomSchema);


const bookingschema = new Schema({
    userId: {
        required: true,
        type: String
    },
    hotelId: {
        required: true,
        type: String
    },
    startFrom: {
        required: true,
        type: Date
    },
    endsOn: {
        required: true,
        type: Date
    },
    numberOfRoom: {
        required: true,
        type: Number
    },
    amountTobePayed: {
        
        type: Number
    },
    created_on: {
        type: Date,
        default: Date.now
    },
})
const bookingModel = model('booking', bookingschema)

module.exports = { usermodel, hotel, bookingModel, rooms }