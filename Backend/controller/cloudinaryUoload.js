
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const Multer = require("multer");


cloudinary.config({

  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
async function handleUpload(file) {

  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}
const deleteCloudinary= async (req, res) => {
  try {
    // Find user by id
    let user = await User.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // Delete user from db
    await user.remove();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
}



module.exports = { handleUpload }