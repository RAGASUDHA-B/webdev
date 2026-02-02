require("dotenv").config();
const express=require("express");
const cors=require("cors");
const connectMongo=require("./config/mongo");
const mysql=require("./config/mysql");
const app=express();
app.use(express.json());
app.use(cors());
connectMongo();
mysql.getConnection()
   .then(()=>console.log("Mysql connected"))
   .catch(err=>console.log(err));
app.get("/",(req,res)=>{
    res.send("backend running successfully");
});
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
});
