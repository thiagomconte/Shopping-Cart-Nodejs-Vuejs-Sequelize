const jwt = require("jsonwebtoken");
const User = require("../Models/User");

module.exports = async (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
        res.status(401).json("Não autorizado");
    } else {
        token = token.split(" ");
        jwt.verify(token[1], process.env.SECRET_KEY, async (err, decoded) => {
            if (err) return res.status(401).json("Não autorizado");

            let user = await User.findByPk(decoded.id);

            if (!user) return res.status(401).json("Não autorizado");

            req.decoded = decoded;
            next();
        });
    }
};
