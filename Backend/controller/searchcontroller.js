const { placeModel } = require("../Model/userschema");

const pageSize = 10;



async function getDocuments(req,res) {
const {searchparam, pagenumber=1} = req.body
console.log(pagenumber)
    try {
        const totalPosts = await placeModel.countDocuments().exec();
   
        if((pageSize*(pagenumber-1))>totalPosts){
           return  res.send('result exceeded');
        }
    const documents = await placeModel.find({$or:[{'placeName':{'$regex': searchparam}},{'location':{'$regex': searchparam}} ]})
            .skip((pagenumber - 1) * pageSize)
            .limit(pageSize)
            .exec();
        
        // Handle retrieved documents
        console.log(documents);
        res.send('success');
    } catch (error) {
        // Handle error
        console.error(error);
        res.send('faild');
    }
}


module.exports=getDocuments
