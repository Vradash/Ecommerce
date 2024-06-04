const router=require("express").Router();
const User=require("../models/user");
const CryptoJS = require("crypto-js");

router.post("/register",async (req,res)=>{
    const newUser=new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.SEC_PASS).toString()
    });

    try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

// Login
// We are using post instead of get because if we use get we have to send user credentials like
// username and password through url whereas in post we can send it through body
router.post("/login",async (req,res)=>{
    try{
        const user=await User.findOne({username: req.body.username});
        const hashedpassword=CryptoJS.AES.decrypt(user.password,process.env.SEC_PASS);
        const password=hashedpassword.toString(CryptoJS.enc.Utf8);

        if(!user || password!==req.body.password){
            res.status(401).json("Wrong Credentials");
        }
        else{
            res.status(200).json(user);
        }
        
        //Use when u dont want the password to be shown in response
        // const {passcode,...others}=user._doc;
        // res.status(200).json(others);

    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;