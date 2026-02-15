const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");//import all 
require("dotenv").config(); 
const app=express(); //creating app
app.use(cors());//creating link between frontend and backend
app.use(express.json());//read json file
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
app.use("/api/students",require("./routes/studentRoutes"));
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{  //start the server
    console.log(`server running on port ${PORT}`);
});
