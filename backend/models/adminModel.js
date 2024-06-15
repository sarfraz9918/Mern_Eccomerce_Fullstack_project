
const mongoose=require("mongoose");
const adminSchema= new mongoose.Schema({ 
    userid:String, 
    password:String
})

module.exports = mongoose.model("adminuser", adminSchema);