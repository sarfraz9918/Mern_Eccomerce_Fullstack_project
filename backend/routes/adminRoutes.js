const express= require("express");
const router= express.Router();

const adminController= require("../controllers/adminController");


router.post("/checkadmin", adminController.adminUserCheck);


module.exports=router;


