const { bookingModel } = require("../Model/userschema");

const booknow = async (req, res, next) => {

    const { placeId, startFrom, endsOn, quantity, amountTobePayed } = req.body;
    const { userId } = req
    const booking = new bookingModel({
        placeId,
        startFrom,
        endsOn,
        userId,
        quantity,
        amountTobePayed
    })
   
       
  
   


    try {
        await booking.save();

        console.log("datas",placeId,"useriD", userId);
        res.status(201).send({status:'ok'});
    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
}
module.exports = { booknow };