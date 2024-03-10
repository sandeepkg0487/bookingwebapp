const { bookingModel } = require("../Model/userschema");


const checkavailability = (req, res, next) => {
  const { placeId, startFrom, endsOn, quantity, } = req.body;
  const startDate = new Date(startFrom)
  const endDate = new Date(startDate); // Create a copy of startDateVariable
  endDate.setDate(endDate.getDate() + 1);
  console.log(placeId, startDate, startDate + 1, quantity);
  bookingModel.aggregate([
    {
      $match: {
        placeId: placeId,
        startFrom: {
          $gte: startDate, 
          $lt: endDate 
        },
       
        // Filter documents by the variable
      }
    },
    {
      $group: {
        _id: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$startFrom" } },
          placeId: "$placeId"
        },
        totalRoom: { $sum: '$quantity' }
      }
    }
  ])
    .then(result => {
      console.log('Total Price by Date and Product ID:', result)
      req.checkAvialiability = result
      if(!req?.any){ 
        return res.status(200).json({filled:result[0].totalRoom})
      }
     next();
    })
    .catch(error => {
      console.error('Error:', error);
      res.send(error)
    });


}
module.exports = checkavailability;