const express = require('express')
const { authMiddleware } = require('../../controller/jwt');
const { usermodel, rooms, bookingModel } = require('../../Model/userschema');
const { ObjectId } = require('mongodb');
const filterAndFindRoom = require('../../controller/filterAndFindRoom');
const getSlip = require('../../controller/getSlip');



const Route = express()

// find rooms of a hotel by uing hotel id

Route.get("/getRoom/:id", async (req, res) => {
    console.log('hitting getRoom');
    const hotelid = req.params['id'];
    console.log(hotelid);
    if (!hotelid) {
        return res.status(400).json({ error: 'Invalid hotel ID' });
    }
    try {
        const getrooms = await rooms.find({ hotelid }).select('-roomStructure');;
        console.log(getrooms);
        res.json(getrooms);
    } catch (error) {
        console.error('Error finding rooms:', error);
        res.status(500).json({ error: 'Internal server error' });
    }


})

// findRoom by user >>>>> make api for enter single hotel page
Route.post("/findRoom", filterAndFindRoom, (req, res) => {

    console.log("final result", req.getrooms);
    res.send(req.getrooms)

});

// make booking by user >>>>
Route.post('/book-room', authMiddleware, getSlip, filterAndFindRoom, async (req, res) => {

    // step 1: authenticate password
    // stpe 2: check the userinput is true such as slip
    // step 3:check  room is avivlable for the date 
    // stpe 4:make booking room one by one 
    // step 5:send result 





    const { hotelId, roomId, start_date, end_date, numberOfRooms, } = req.body;

    console.log(req.body.formdata);
    // console.log('----------------------------------------')
    // console.log(req.body);
    // console.log('----------------------------------------');
    try {

        const userId = req.jwt.userId
        const user = await usermodel.findOne({ _id: userId });
        const fullName = req.body.formdata.firstName.concat(" ", req.body.formdata.lastName)
        const orderNote = req.body.formdata.orderNote
        const phone = user.phone
        const booking = { start: new Date(start_date), end: new Date(end_date), name: fullName, phone, userId, orderNote };
        const roomNubmber = req.getrooms[0].availableRooms


        if (!user) {
            return res.send("somting went wrong user is not authenticated")
        }

        let i = 0
        console.log('roomNubmber.length < numberOfRooms', roomNubmber.length, numberOfRooms);
        if (roomNubmber.length < numberOfRooms) {
            res.status(500).json({ status: "faild", message: "room cannot be available" })
        }
        while (numberOfRooms > i) {
            console.log("while...........");
            const roomIdObj = new ObjectId(roomId);
            let result = await rooms.findOneAndUpdate(
                { _id: roomIdObj, 'roomStructure.roomNumber': roomNubmber[i] },
                { $push: { 'roomStructure.$.booking': booking } },
                { 'roomStructure.$': 1 }//is provided, Mongoose will return the modified document rather than the original document before the update.
            );


            if (!result) {
                return res.status(404).json({ message: 'Room not found' });
            }
            i++


        }
        console.log('req.slip.total', req.slip.total);
        const slip = bookingModel({
            userId: userId,
            hotelId: hotelId,
            startFrom: new Date(start_date),
            endsOn: new Date(end_date),
            numberOfRoom: numberOfRooms,
            amountTobePayed: req.slip.total

        })

        const bookingslip = await slip.save()

        console.log("::::slip::::", slip);


        res.status(201).json({ message: 'Availability added successfully', bookingslip });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
);

Route.post('/getPrice', getSlip, (req, res) => {
    res.status(200).json(req.slip);
});

module.exports = Route