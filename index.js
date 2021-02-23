//!DEPENDENCIES
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//!DATABASE
require("./DataBase/Authenticate");

//!MIDDLEWARES
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//!ROUTES
app.use("/api/user", require("./Routes/User"));
app.use("/api/product", require("./Routes/Product"));
app.use("/api/comment", require("./Routes/Comment"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) return console.error(err);
    console.log(`Server running on PORT ${PORT}`);
});
