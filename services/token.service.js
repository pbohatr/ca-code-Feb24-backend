const jwt = require("jsonwebtoken");
const Company = require('../model/company.schema');

let middleware = {};
middleware.verifyToken = verifyToken;

async function verifyToken(req, res, next) {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.TOKEN_KEY);
            req.user = await Company.findById(decoded.id).select('_id');
            next();
        } catch (error) {
            return res.status(401).send('Authentication failed, please login again!');
        }
    } else {
        return res.status(401).send('Not authorized');
    }
};

module.exports = middleware;