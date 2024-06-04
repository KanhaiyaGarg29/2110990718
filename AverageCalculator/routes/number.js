
const express=require('express');
const router=express.Router();

const {getNumber} =require("../controllers/AverageNumber")

router.get("/numbers/:numberid",getNumber)
module.exports=router;