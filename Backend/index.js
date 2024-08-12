const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dbConnection = require("./utils/db");
require('dotenv').config();

//PORT
const PORT = process.env.PORT;

//DB
// const DB = process.env.DB;
// mongoose.connect(DB).then(() =>{
//     console.log("Database connected successfully")
// }).catch((err) => {
//     console.log(err);
// })

//SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
})