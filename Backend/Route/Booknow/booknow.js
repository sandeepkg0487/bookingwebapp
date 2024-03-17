const express = require('express')
const { authMiddleware } = require('../../controller/jwt');
const { usermodel, rooms, bookingModel } = require('../../Model/userschema');


const Route = express()



// findRoom by user >>>>> make api for enter single hotel page
Route.post("/findRoom", async (req, res) => {


    const from_date = new Date('2024-03-18')
    const to_date = new Date(new Date('2024-03-21'))
    console.log(from_date);
    try {
        const getrooms = await rooms.aggregate([
            { $unwind: "$roomStructure" },
            {
                $match: {
                    "roomStructure.booking": {
                        $not: {

                            $elemMatch: {
                                $or: [
                                    { start: { $gt: new Date(from_date), $lt: new Date(to_date) } },
                                    { end: { $gt: new Date(from_date), $lt: new Date(to_date) } },
                                    { $and: [{ start: { $lte: from_date } }, { end: { $gte: to_date } }] }
                                ]
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    hotelid: 1,
                    roomType: 1,
                    roomNumber: "$roomStructure.roomNumber",
                    booking: "$roomStructure.booking"
                }
            }
        ]);

        console.log(getrooms)
        res.send(getrooms)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }


});

// make booking by user >>>>
Route.post('/book-room', authMiddleware, async (req, res) => {
    try {
        const { hotelId, roomNumber, start, end ,numberOfRoom } = req.body; // Assuming you're passing hotelId, roomNumber, start, and end in the request body
        const userId = req.jwt.userId
        console.log(userId);
        console.log(hotelId, roomNumber, start, end);
        const user = await usermodel.findOne({ _id: userId });
        if (!user) {
            return res.send("somting went wrong")
        }
        const name = user.name
        const phone = user.phone

        const booking = { start: new Date(start), end: new Date(end), name: name, phone: phone, userid: userId };

        const result = await rooms.findOneAndUpdate(
            { hotelid: hotelId, 'roomStructure.roomNumber': roomNumber },
            { $push: { 'roomStructure.$.booking': booking } },
            { 'roomStructure.$': 1 }//is provided, Mongoose will return the modified document rather than the original document before the update.
        );


        if (!result) {
            return res.status(404).json({ message: 'Room not found' });
        }
        const slip = bookingModel({
            userId:userId,
            hotelId:hotelId,
            startFrom:start,
            endsOn:end,
            numberOfRoom:numberOfRoom,
           // amountTobePayed:

        })

        const bookingslip = await slip.save()




        res.json({ message: 'Availability added successfully', user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = Route