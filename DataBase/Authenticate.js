const conn = require("./Conn");
const User = require("../Models/User");
const Product = require("../Models/Product");
const Comment = require("../Models/Comment");

module.exports = conn.authenticate()
    .then(async () => {
        User.hasMany(Product,  {
            onDelete: 'CASCADE'
        })
        User.hasMany(Comment,  {
            onDelete: 'CASCADE'
        })
        Product.hasMany(Comment, {
            onDelete: 'CASCADE'
        })
        Comment.belongsTo(User)
        await conn.sync();
        console.log("Database connection established");
    })
    .catch((err) => {
        console.log(err);
});
