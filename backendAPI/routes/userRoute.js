const router=require("express").Router();

router.get("/usertest",(req,res)=>{
    res.send("User test successfull")
});

router.post("/userposttest",(req,res)=>{
    const username=req.body.username;
    res.send("your username is "+username);
    console.log(username);
})

module.exports=router;