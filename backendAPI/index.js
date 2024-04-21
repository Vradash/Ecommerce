const express=require("express");
const app=express();
const mongoose=require("mongoose")
const userRoute=require("./routes/userRoute");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/productRoute");
const cartRoute=require("./routes/cartRoute");

mongoose.connect("mongodb+srv://Vikram:BlpAvgHnNjcT15Tb@ecommerce.iwdduip.mongodb.net/")
.then(()=>console.log("DBconnection Successfull"))
.catch((err)=>console.log(err));


// app.get("/random",(req,res)=>{
//     console.log("Successfull");
//     res.send("Successfull");
// });

app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);

app.listen(5000,()=>{
    console.log("Server is running")
})