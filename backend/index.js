const express= require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
const adminRouter= require("./routes/adminRoutes");
const productRouter= require("./routes/productRoutes");
const paymentRoute= require("./routes/payment");
const userRoutte=require("./routes/userRoute")

app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/Mern-Live-Project");


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/api/payment/",paymentRoute);
app.use('/user', userRoutte);
app.get("/", (req, res)=>{

     res.send("Welcome to Node JS")

})

app.listen(8000, ()=>{
    console.log("Server Run on 8000!");
})