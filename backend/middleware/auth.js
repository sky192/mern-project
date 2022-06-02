//function
// does the exist?
//verify the token
//

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Not authorized");

    try {
        const secretkey = process.env.SECRET_KEY;
        const payload = jwt.verify(token, secretkey);
        req.user = payload;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}

module.exports = auth;
