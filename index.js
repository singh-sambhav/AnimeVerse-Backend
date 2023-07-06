const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listsRoute = require("./routes/lists");

dotenv.config();
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }).then(()=>console.log("DB Connection is Successfull")).catch((err)=>console.log(err));
app.use(express.json());

app.use("/api/auth" ,authRoute); 
app.use("/api/users" ,userRoute); 
app.use("/api/movies" ,movieRoute); 
app.use("/api/lists" ,listsRoute); 

app.listen(8800 , ()=>{
    console.log("Backend server is running");
});