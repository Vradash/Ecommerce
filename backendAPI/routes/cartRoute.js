const router=require("express").Router();
const Cart=require("../models/cart");

//CREATE
router.post("/",async (req,res)=>{
    const newCart= new Cart(req.body);

    try{
        const savedCart=await newCart.save();
        res.status(201).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
    // req.statusCode(200).json({"nothing": nothing2})
});

//UPDATE
router.put("/find/:userId",async(req,res)=>{
    try{
        const updatedCart=await Cart.findOneAndUpdate(
            {userId: `${req.params.userId}`},
            // req.params.id,
            {
                $addToSet: req.body
            },
            {new: true}
            //returns the mofified value as output
        )
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
})

//DELETE  id=>cartId
router.delete("/:id",async(req,res)=>{
    try{
        const deletedCart= await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $pull: {products: {productId: req.body.productId}}
            }
        )
        res.status(200).json(deletedCart);
        // await Cart.findByIdAndDelete(req.params.id);
        // res.status(200).json("Product is deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//GET USER CART
router.get("/:userId",async(req,res)=>{
    try{
        const cart=await Cart.findOne({userId: `${req.params.userId}`});
        // const cart=await Cart.findById(req.params.userId);
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;