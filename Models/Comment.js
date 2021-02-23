const conn = require('../DataBase/Conn')
const {DataTypes} = require('sequelize')

module.exports = conn.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true
})