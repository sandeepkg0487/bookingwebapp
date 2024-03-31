const { rooms } = require("../../Model/userschema");
const ObjectId = require('mongodb').ObjectId;



const roomDetils = async(req, res, next) => {

    const { Rid } = req.query.params
    console.log("Roomid------------------------------", req.query)
       try {
       const objid = new ObjectId(Rid)
       console.log(objid);
        const roomDetails = await rooms.find({_id:objid}).select('-roomStructure -numberOfRooms');
        if (!roomDetails) {
          return res.status(404).json({ error: 'User not found' })
        }
       
        req.roomDetails = roomDetails
      } catch (error) {
        console.error('Error finding user:', error);
        res.status(500).json({ error: 'Internal server error' })
      }
    

    next();

}
module.exports = { roomDetils }