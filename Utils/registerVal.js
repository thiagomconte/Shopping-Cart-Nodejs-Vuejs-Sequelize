const User = require("../Models/User");

module.exports = async (req, res, next) => {
    let { name, email, password, checkpassword } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (user) {
        return res.status(400).json("Este e-mail já se encontra em uso");
    } else if (!name || !email || !password || !checkpassword) {
        return res.status(400).json("Preencha todos os campos");
    } else if (name.length < 3 || name.length > 30) {
        return res.status(400).json("Nome deve conter 3 a 30 caracteres");
    } else if (password.length < 6 || password.length > 20) {
        return res.status(400).json("Senha deve conter 6 a 20 caracteres");
    } else if (password !== checkpassword) {
        return res.status(400).json("As senhas estão diferentes");
    } else {
        next();
    }
};
