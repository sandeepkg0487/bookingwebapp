const { placeModel } = require("../Model/userschema");


const uploadPlaces = async (req,res,next)=>{

    const {userId, userName,  } =req
    const {location, noOfSlots, placeName} = req.body
    console.log("userId",userId,"username:",userName);

    try {

        const place = new placeModel({
            userName,
            userId,
            location,
            noOfSlots,
            placeName
        })
        await place.save(); 

      return  res.status(201).json({status:true,message:"success"})
        
    } catch (error) {
      return  res.status(500).json({error:error.message})
        
    }
    
}

module.exports={uploadPlaces}