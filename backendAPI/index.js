const express=require("express");
const app=express();
const cors= require("cors");
const mongoose=require("mongoose");
const dotenv= require("dotenv");

const userRoute=require("./routes/userRoute");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/productRoute");
const cartRoute=require("./routes/cartRoute");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBconnection Successfull"))
.catch((err)=>console.log(err));

app.use(cors());

app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server is running")
})