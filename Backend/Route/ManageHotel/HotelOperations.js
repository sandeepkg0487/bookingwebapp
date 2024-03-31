const express = require('express');
const Route = express.Router();
const bcrypt = require('bcrypt');
const Multer = require("multer");
const { handleUpload } = require('../../controller/cloudinaryUoload');
const { rooms, hotel } = require('../../Model/userschema');
const { generateJWT, authMiddleware, generateRefreshJWT } = require('../../controller/jwt');
const { default: mongoose } = require('mongoose');
const ObjectId = require('mongodb').ObjectId;


const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});


// hotel signup >>>>>>
Route.post("/signup", upload.single("my_file"), async (req, res) => {
  try {

    console.log('hitting on upload file');

    const imageName = req?.file


    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);

    const { userName, password, hotelName, location, discription } = req.body
    console.log(userName, password, hotelName, location, discription);

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const makeAdd = new hotel({

      userName,
      password: hashedPassword,
      hotelName,
      location,
      discription,
      images: [{

        cloudinary_id: cldRes.public_id,
        profile_img: cldRes.url

      }]
    })
    await makeAdd.save();
    const payload = {
      userName,
      userid: makeAdd._id,
      mode: 'Hotel'
    }
    const refreshTokenPayload = {
      email:userName ,
    };
    const accessToken = generateJWT(payload)
    const refreshToken = generateRefreshJWT(refreshTokenPayload)


    res.status(201).json({ status: "success", accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});


// hotel login>>>>>>>>>>>>>>>>>
Route.post("/login", async (req, res) => {


  const { userName, password } = req.body
  console.log('email and pasword:', userName, password)
  try {

    //FETCHING USER DATA FROM DB
    const hotelUser = await hotel.findOne({ userName: userName })
    console.log("userfind for checking:", hotelUser);

    //USERNAME VALIDATION
    if (!hotelUser) {
      return res
        .status(400)
        .send({
          message: "Usaer name does not match",

        });
    }

    //PASSWORD VALIDATION
    const passwordmatch = await bcrypt.compare(password, hotelUser.password)
    console.log('is password match :', passwordmatch);
    if (!passwordmatch) {
      console.log('passworddoesent match');
      return res.status(400)
        .send({
          message: "Password does not match",

        });
    }
    console.log('generating token11')
    console.log(userName,);
    const payload = {
      userName: hotelUser.userName, //it wil be emailid
      userId: hotelUser._id,
      isModerator: true
    }
    console.log('generating token11')
    const refreshTokenPayload = {
      email: hotelUser.userName,
    };
    const accessToken = generateJWT(payload)
    const refreshToken = generateRefreshJWT(refreshTokenPayload)
console.log(accessToken,refreshToken);
   return  res.status(201).json({ status: "success", accessToken , refreshToken});
  } catch (err) {
    console.log('error happen in login authcontroll.js'.err);
  }


});


// Add room >>>>>>>>>>>>>
Route.post("/addRoom", authMiddleware, upload.single("my_file"), async (req, res) => {

  console.log('moderator status line 123', req?.jwt?.isModerator)
  if (!req?.jwt?.isModerator) {
    res.status(401).json({ message: 'invalid user' })
  }
  try {
    console.log('hitting on addRoom ');
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    const hotelid = req.jwt.userId
    const { roomType, numberOfRooms, price, capacity, extras, location } = req.body
    console.log(hotelid, roomType, numberOfRooms, price, capacity, extras, location);



    let makeRoom = []
    for (i = 1; i <= numberOfRooms; i++) {
      makeRoom.push({
        roomNumber: i,
        booking: {
          start: new Date('2024-03-16'),
          end: new Date(new Date('2024-03-16').getTime() + (i * 24 * 60 * 60 * 1000))

        }
      })
      console.log(new Date(new Date('2024-03-16').getTime() + (i * 24 * 60 * 60 * 1000)));
    }
    console.log(makeRoom)


    const makeAdd = new rooms({
      hotelid,
      location,
      roomType,
      numberOfRooms,
      price,
      capacity,
      extras,
      roomStructure: makeRoom,
      images: [{

        cloudinary_id: cldRes.public_id,
        RoomImage: cldRes.url

      }]

    })
    await makeAdd.save();
    console.log('room added successfuly')

    res.status(201).json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

// view user  booking details for hotels 
Route.get("/getBooking", authMiddleware, async (req, res) => {

  const isModerator = req?.jwt?.isModerator || false;
  const userId = req?.jwt?.userId || null;
  console.log("userId", userId)

  if (isModerator) {
    try {
      const result = await rooms.find({ hotelid: userId.toString() })
        .select('_id location roomType')

      if (result) {
        console.log(result);
        return res.status(200).json({ message: "success", data: result })
      }
      return res.status(404).json({ message: "no data to fetch", data: result })
    } catch (error) {
      return res.status(500).json({ message: "faild to fetch data ", })
    }

  }
  res.status(403).json({ message: "Access Forbidden" })

});
//  view user  booking details for hotels FOR ROOMWISE VIEW 
//SORT BY ROOM AND DATE TO SHOW BOOKING  
Route.get("/getBookingByRoom", authMiddleware, async (req, res) => {


  console.log("userId }}}}}}}}}}}}}}}}}}}}}}]")
  const isModerator = req?.jwt?.isModerator || false;
  const userId = req?.jwt?.userId || null;
  console.log("param", req.query)
  const searchDate = req.query.date
  const roomIdObj = new ObjectId(req.query.roomid);
  console.log(roomIdObj);

  if (true) {
    try {
      const result = await rooms.aggregate([
        {
          "$match": {
            _id: roomIdObj
          }
        },
        {
          "$unwind": "$roomStructure"
        },
        {
          $project: {
            roomNumber: "$roomStructure.roomNumber",
           
            booking: {
              $filter: {
                input: "$roomStructure.booking",
                as: "booking",
                cond: {
                  $and: [
                    { $lte: ["$$booking.start", new Date(searchDate)] }, // Filter by start date greater than or equal to searchDate
                    { $gte: ["$$booking.end", new Date(searchDate)] }   // Filter by end date less than or equal to searchDate
                  ]
                }
              }
            }
          }
        }
      ]
      )


      console.log(result);
      if (result) {
        console.log(result);
        return res.status(200).json({ message: "success", data: result })
      }
      return res.status(404).json({ message: "no data to fetch", data: result })
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "faild to fetch data ", })
    }

  }
  res.status(403).json({ message: "Access Forbidden" })

});






Route.delete("/:id",);



module.exports = Route;