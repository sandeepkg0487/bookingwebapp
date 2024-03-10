
const jwt = require('jsonwebtoken');
const secretKey = "hi iam key";

// authenticate  jwt
const authMiddleware = (req, res, next) => {
    console.log('reqhitting auth middleware authenticate');
    const secretKey = "hi iam key";
    const authorizationHeader = req.header("Authorization")
    // This header typically contains the JWT
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ success: false, message: "Invalid authorization header" });
    }
    // extract the actual token from the header.remove the Bearer
    const token = authorizationHeader.replace("Bearer ", "")

    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: "Authorization token not found" });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('decoded:', decoded)
        if (decoded.userId) {
            req.userId = decoded.userId
            req.userName = decoded.username
        }
        if (decoded.bookingId) {
            // req.userId = decoded.userId
            // req.userName = decoded.username
        }
        next();
        // return res.status(200).json({ success: true, message: "valid token" });
    } catch (err) {
        console.error(err);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
}



//   create JWT token

function generateJWT(payload) {
    console.log('start generating token');
    // JWT payload containing user information



    // JWT options: expiresIn specifies the token's expiration time (e.g., 1 hour)
    const options = {
        expiresIn: '1h',
    };
    // Generate and return the JWT
    const token = jwt.sign(payload, secretKey, options);
    return token;

}

module.exports = { generateJWT, authMiddleware }