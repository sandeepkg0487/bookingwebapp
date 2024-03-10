const express = require('express');
const Route = express.Router();
const { logincontroll } = require('../../controller/authcontroller');
const { authMiddleware } = require('../../controller/jwt');
const Multer = require("multer");
const {handleUpload} = require('../../controller/cloudinaryUoload');
const { placeModel } = require('../../Model/userschema');

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

Route.post("/", authMiddleware, upload.single("my_file"), async (req, res) => {
  try {
    console.log('hitting on upload file');
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    //   userName:,
    // userId: 




    const { placeName, location, noOfSlots, discription, totalAmount } = req.body
    console.log(placeName, location, noOfSlots, discription,);
    console.log(req.userId);
    console.log(req.userName)
    const { userId, userName } = req

    const makeAdd = new placeModel({
      userId,
      userName,
      placeName,
      location,
      noOfSlots,
      discription,
      totalAmount,
      images: [{

        cloudinary_id: cldRes.public_id,
        profile_img: cldRes.url

      }]
    })
    await makeAdd.save();

    res.status(201).json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

Route.delete("/:id",);



module.exports = Route;