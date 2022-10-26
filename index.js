const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute =require("./routes/author");
var port = process.env.PORT || 4000;

dotenv.config();
//connect database
mongoose.connect((process.env.MONGODB_URL), () =>{
    console.log("connected to MongoDB");
});


app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
app.use(express.json());

//routed
app.use("/v1/author", authorRoute);



app.listen(port, () => {
    console.log("Server is running ...");
});