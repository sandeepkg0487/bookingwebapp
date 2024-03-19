const {  hotel } = require("../Model/userschema");

const pageSize = 10;


 //search from homepage 
async function getDocuments(req, res) {
    console.log('HITTING search');
    const { searchparam = '', pagenumber = 1 } = req?.query

  console.log(searchparam,pagenumber);
   
    try {
        const totalPosts = await hotel.countDocuments().exec();

        if ((pageSize * (pagenumber - 1)) > totalPosts) {
            return res.send('result exceeded');
        }
        const documents = await hotel.find({ $or: [{ 'hotelName': { '$regex': searchparam } }, { 'location': { '$regex': searchparam } }] })
            .skip((pagenumber - 1) * pageSize)
            .limit(pageSize)
            .exec();

        // Handle retrieved documents
      //  console.log(documents);
        res.status(200).json(documents)
    } catch (error) {
        // Handle error
        console.error(error);
        res.send('faild');
    }
}


module.exports = getDocuments
