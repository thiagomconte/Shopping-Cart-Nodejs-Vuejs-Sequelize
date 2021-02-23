const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const regVal = require("../Utils/registerVal");
const Product = require("../Models/Product");
const jwt = require("jsonwebtoken");
const Auth = require("../Authorization/Auth");

//!REGISTRAR USUARIO
router.post("/", regVal, async (req, res) => {
    try {
        let { name, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
});


router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [Product],
        });
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
});


//!AUTENTICAR USUARIO
router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json("Credenciais incorretas");
        }

        let payload = {
            id: user.id,
            email: user.email,
        };

        var token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "7d",
        });
        res.json({token, email});
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
