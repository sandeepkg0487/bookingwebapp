const { rooms } = require("../Model/userschema");
const ObjectId = require('mongodb').ObjectId;



const filterAndFindRoom = async (req, res, next) => {

    console.log('req hitting.......filter and find roomm');

    const { start_date, end_date, searchparam, numberOfRooms, roomId } = req.body
    console.log(req.body);
    const roomIdObj = new ObjectId(roomId);

    try {

        const getrooms = await rooms.aggregate([
            {
                $match: {
                    "location": {
                        $regex: 'uganda'
                    },
                    price: { $gte: 400, $lte: 8000 }
                }
            },
            { $unwind: "$roomStructure" },
            {
                $match: {
                    "roomStructure.booking": {
                        $not: {
                            $elemMatch: {
                                $or: [
                                    { start: { $gte: new Date(start_date), $lte: new Date(end_date) } },
                                    { end: { $gte: new Date(start_date), $lte: new Date(end_date) } },
                                    { $and: [{ start: { $lte: start_date } }, { end: { $gte: end_date } }] }
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
                    price: 1,
                    capacity: 1,
                    extras: 1,
                    images: 1,
                    location: 1,
                    roomNumber: "$roomStructure.roomNumber",
                    booking: "$roomStructure.booking"
                }
            },
            {
                $group: {
                    _id: { roomType: "$roomType", roomid: "$_id" },
                    hotelid: { $first: "$hotelid" },
                    availableRooms: { $push: "$roomNumber" }
                }
            },
            {
                $addFields: {
                    avilableRoomCount: { $size: "$availableRooms" }
                }
            },
            {
                $match: {
                    avilableRoomCount: { $gte: numberOfRooms }
                }
            }

        ])


        // Execute the aggregation pipeline using db.collection.aggregate(pipeline)
        // Example: db.collection.aggregate(pipeline).toArray((err, results) => { ... });





        // working querry............................................

        // const getrooms = await rooms.aggregate([
        //     {
        //         $match: {
        //             "location": {
        //                 $regex: 'uganda'
        //             },
        //             price: { $gte: 400, $lte: 8000 }
        //         }
        //     },
        //     { $unwind: "$roomStructure" },
        //     {
        //         $match: {
        //             "roomStructure.booking": {
        //                 $not: {

        //                     $elemMatch: {
        //                         $or: [
        //                             { start: { $gte: new Date(start_date), $lte: new Date(end_date) } },
        //                             { end: { $gte: new Date(start_date), $lte: new Date(end_date) } },
        //                             { $and: [{ start: { $lte: start_date } }, { end: { $gte: end_date } }] }
        //                         ]
        //                     }
        //                 }
        //             }
        //         }
        //     },

        //     {
        //         $project: {
        //             hotelid: 1,
        //             roomType: 1,
        //             price: 1,
        //             capacity: 1,
        //             extras: 1,
        //             images: 1,
        //             location: 1,
        //             roomNumber: "$roomStructure.roomNumber",
        //             booking: "$roomStructure.booking"
        //         }
        //     },
        //     {
        //         $group:
        //         {
        //             _id: { roomType: "$roomType", roomid: "$_id" },
        //             hotelid: { $first: "$hotelid" },
        //             avilableRoom: { $push: "$roomNumber" },
        //             price: { $first: "$price" },
        //             capacity: { $first: "$capacity" },
        //             extras: { $first: "$extras" },
        //             images: { $first: "$images" },
        //             location: { $first: "$location" },
        //         }
        //     },
        //     {
        //         $addFields: {
        //             avilableRoomCount: { $size: "$avilableRoom" }
        //         }
        //     },
        //     {
        //         $match: {
        //             avilableRoomCount: { $gte: numberOfRooms }
        //         }
        //     }
        // ])


        req.getrooms = getrooms
        console.log('--------------------------------------');
        console.log("req.getrooms", req.getrooms);
        console.log('--------------------------------------');
        next();
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = filterAndFindRoom;