const { DataTypes } = require("sequelize");
const conn = require("../DataBase/Conn");
const SequelizeSlugify = require("sequelize-slugify");

const Product = conn.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
});

SequelizeSlugify.slugifyModel(Product, {
    source: ["name"],
});

module.exports = Product;
