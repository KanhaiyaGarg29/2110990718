const express=require('express');
const app=express();

require("dotenv").config()

const PORT= process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`)
})

app.use(express.json());

const number=require("./routes/number");

app.use("",number);