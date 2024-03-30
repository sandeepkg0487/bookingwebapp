const { rooms } = require("../Model/userschema");

const getSlip = async (req,res,next)=>{
    
        try {
            console.log("HIIIII IAM GETpRICE");
            const { roomId, numberOfRooms, start_date, end_date } = req.body; // Assuming you're passing hotelId, roomNumber, start, and end in the request body
            //const userId = req.jwt.userId
            console.log(roomId, numberOfRooms, start_date, end_date);
    
            let date1 = new Date(start_date);
            let date2 = new Date(end_date);
    
            let Difference_In_Time =
                date2.getTime() - date1.getTime();
    
            let Difference_In_Days =
                Math.round
                    (Difference_In_Time / (1000 * 3600 * 24));
    
    
            const singleRoom = await rooms.findOne({ _id: roomId });
            if (!singleRoom) {
                return res.send("somting went wrong")
            }
            const price = singleRoom.price
            const total = price * numberOfRooms * Difference_In_Days
            console.log("total",total)
            req.slip = { status: "success", total,price, numberOfRooms, noOfDay: Difference_In_Days, start_date: date1, end_date: end_date, }
            
           next()
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    
}
module.exports = getSlip;   