const { usermodel } = require('../Model/userschema')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { generateJWT } = require('./jwt');



async function registercontroll(req, res, next) {

    const { username, password, email } = req.body;
    console.log('req.body:', req.body);
    console.log(username, password);

    try {
        // finding email already exist making email id unique
        const findemail = await usermodel.findOne({ email })
        if (findemail)
            throw new Error('user already exist');
        // return res.status(400).json({error:'user already exist'})

        // passwordHashing
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        // create usermodel data
        const user = new usermodel({ username: username, password: hashedPassword, email: email })
        await user.save();
        const payload = {
            userId: user._id,
            username: user.email,
        };
        const token = generateJWT(payload)
        console.log("token:", token);

        //SEND RESPONSE
        res
            .status(200)
            .json({
                status: "success",
                message: "Resgister Successful",
                email: user.email,
                token,
            });


    } catch (err) {
        res.status(300).json({ err: err.message })
    }

}

const logincontroll = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(password)
    try {

        //FETCHING USER DATA FROM DB
        const user = await usermodel.findOne({ username })
        console.log("userfind for checking:", user);

        //USERNAME VALIDATION
        if (!user) {
            return res
                .status(400)
                .send({
                    message: "Usaer name does not match",

                });
        }

        //PASSWORD VALIDATION
        const passwordmatch = await bcrypt.compare(password, user.password)
        console.log('is password match :', passwordmatch);
        if (!passwordmatch) {
            console.log('passworddoesent match');
            return res.status(400)
                .send({
                    message: "Password does not match",

                });
        }
        console.log('generating token');
        // generete tocken
        const payload = {
            userId: user._id,
            username: user.email,
        };
        const token = generateJWT(payload)
        console.log("token:", token);
        //SEND RESPONSE
        res
            .status(200)
            .json({
                message: "Login Successful",
                status: 'success',
                email: user.email,
                token,
            });

    } catch (err) {
        console.log('error happen in login authcontroll.js'.err);
    }

}

const servedata = (req, res, next) => {
    console.log(req.userId);
    console.log(req.userName);
    res.status(200).json({ status: 'sucess', meaasage: 'fake msg' })
}

// jwt verification





module.exports = { registercontroll, logincontroll, servedata };


